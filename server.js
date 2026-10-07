
const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");
const { categories } = require("./cards");

const app = express();
const server = http.createServer(app);
const io = new Server(server, { pingInterval: 10000, pingTimeout: 20000 });

app.use(express.static(path.join(__dirname, "public")));
app.get("/api/categories", (req,res) => res.json(categories.map(c=>({id:c.id,name:c.name,icon:c.icon,count:c.cards.length}))));

const imageCache = new Map();
function svgPlaceholder(label) {
  const safe = String(label || "?").replace(/[<>&'"]/g, "");
  const initials = safe.split(/\s+/).slice(0,2).map(x=>x[0]||"").join("").toUpperCase();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="420"><defs><linearGradient id="g" x1="0" x2="1"><stop stop-color="#282c3c"/><stop offset="1" stop-color="#171923"/></linearGradient></defs><rect width="100%" height="100%" rx="28" fill="url(#g)"/><circle cx="320" cy="175" r="95" fill="#3b4055"/><text x="320" y="205" text-anchor="middle" font-family="Arial" font-weight="700" font-size="70" fill="#ffffff">${initials}</text><text x="320" y="340" text-anchor="middle" font-family="Arial" font-size="30" fill="#c8cada">${safe.slice(0,26)}</text></svg>`;
  return Buffer.from(svg);
}

app.get("/api/image", async (req,res) => {
  const q = String(req.query.q || "").slice(0,120).trim();
  if (!q) return res.status(400).end();
  if (imageCache.has(q)) {
    const cached = imageCache.get(q);
    if (cached) return res.redirect(302, cached);
    res.type("image/svg+xml").send(svgPlaceholder(q)); return;
  }
  try {
    const url = new URL("https://en.wikipedia.org/w/api.php");
    url.searchParams.set("action","query");
    url.searchParams.set("generator","search");
    url.searchParams.set("gsrsearch",q);
    url.searchParams.set("gsrlimit","3");
    url.searchParams.set("prop","pageimages");
    url.searchParams.set("piprop","thumbnail");
    url.searchParams.set("pithumbsize","700");
    url.searchParams.set("format","json");
    url.searchParams.set("origin","*");
    const response = await fetch(url, {headers:{"User-Agent":"ChooseEverythingAuction/2.0"}});
    const data = await response.json();
    const pages = Object.values(data?.query?.pages || {});
    const image = pages.find(p=>p?.thumbnail?.source)?.thumbnail?.source || null;
    imageCache.set(q, image);
    if (image) return res.redirect(302, image);
  } catch (e) {}
  imageCache.set(q, null);
  res.type("image/svg+xml").send(svgPlaceholder(q));
});

const rooms = new Map();
const MAX_PLAYERS = 12;
const AUCTION_SECONDS = 16;
const BETWEEN_SECONDS = 4;
const VOTE_SECONDS = 25;

function roomCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i=0;i<5;i++) out += chars[Math.floor(Math.random()*chars.length)];
  return out;
}
function cleanName(n){ return String(n||"Player").trim().slice(0,18) || "Player"; }
function playerPublic(p, revealInventory=true) {
  return {
    id:p.id, name:p.name, cash:p.cash, votes:p.votes, wonCount:p.inventory.length,
    inventory: revealInventory ? p.inventory : []
  };
}
function publicRoom(room) {
  const reveal = true; // itens ganhos no leilão são públicos e podem ser vistos durante a partida
  return {
    code:room.code, hostId:room.hostId, phase:room.phase,
    settings:room.settings,
    round:room.round,
    currentCard:room.currentCard,
    auctionEndsAt:room.auctionEndsAt,
    highBid:room.highBid,
    highBidderId:room.highBidderId,
    lastWinner:room.lastWinner,
    voteEndsAt:room.voteEndsAt,
    winnerId:room.winnerId,
    players:room.players.map(p=>playerPublic(p,reveal))
  };
}
function emitRoom(room){ io.to(room.code).emit("room", publicRoom(room)); }
function getRoom(socket){ return rooms.get(socket.data.roomCode); }
function emitSound(room, type){ io.to(room.code).emit("sound", type); }

function getDeck(categoryId){
  if (!categoryId || categoryId === "mixed") {
    return categories.flatMap(c => c.cards.map(card => ({...card, categoryName:c.name, categoryIcon:c.icon})));
  }
  const c = categories.find(x=>x.id===categoryId);
  return c ? c.cards.map(card=>({...card, categoryName:c.name, categoryIcon:c.icon})) : [];
}
function shuffled(arr){
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
  return a;
}
function clearRoomTimers(room){
  if(room.auctionTimer) clearTimeout(room.auctionTimer);
  if(room.nextTimer) clearTimeout(room.nextTimer);
  if(room.voteTimer) clearTimeout(room.voteTimer);
}

function beginAuction(room){
  if(room.round >= room.settings.rounds || room.deckIndex >= room.deck.length){
    startVote(room); return;
  }
  room.phase="auction";
  room.round++;
  room.currentCard=room.deck[room.deckIndex++];
  room.extensions=0;
  room.highBid=0;
  room.highBidderId=null;
  room.lastWinner=null;
  room.auctionEndsAt=Date.now()+AUCTION_SECONDS*1000;
  emitRoom(room);
  emitSound(room,"round");
  scheduleAuctionEnd(room);
}
function scheduleAuctionEnd(room){
  if(room.auctionTimer) clearTimeout(room.auctionTimer);
  const delay=Math.max(50, room.auctionEndsAt-Date.now());
  room.auctionTimer=setTimeout(()=>finishAuction(room), delay);
}
function finishAuction(room){
  if(room.phase!=="auction") return;
  const winner=room.players.find(p=>p.id===room.highBidderId);
  if(winner && room.highBid>0){
    const cost=room.highBid;
    winner.cash-=cost;
    winner.inventory.push({...room.currentCard, paid:cost});
    room.lastWinner={id:winner.id,name:winner.name,bid:cost,card:room.currentCard};
  } else {
    room.lastWinner={id:null,name:"Ninguém",bid:0,card:room.currentCard};
  }
  room.phase="between";
  room.auctionEndsAt=null;
  emitRoom(room);
  emitSound(room, winner ? "win" : "miss");
  room.nextTimer=setTimeout(()=>beginAuction(room), BETWEEN_SECONDS*1000);
}
function startVote(room){
  room.phase="vote";
  room.currentCard=null;
  room.highBid=0;
  room.highBidderId=null;
  room.voteEndsAt=Date.now()+VOTE_SECONDS*1000;
  room.votedBy=new Set();
  room.players.forEach(p=>p.votes=0);
  emitRoom(room);
  emitSound(room,"vote");
  room.voteTimer=setTimeout(()=>finishVote(room), VOTE_SECONDS*1000);
}
function finishVote(room){
  if(room.phase!=="vote") return;
  let max=-1, winners=[];
  for(const p of room.players){
    if(p.votes>max){max=p.votes;winners=[p];}
    else if(p.votes===max) winners.push(p);
  }
  if(winners.length===0) room.winnerId=null;
  else room.winnerId=winners[Math.floor(Math.random()*winners.length)].id;
  room.phase="results";
  room.voteEndsAt=null;
  emitRoom(room);
  emitSound(room,"final");
}

io.on("connection", socket=>{
  socket.emit("catalog", categories.map(c=>({id:c.id,name:c.name,icon:c.icon,count:c.cards.length})));

  socket.on("createRoom", ({name}, cb)=>{
    let code; do{ code=roomCode(); }while(rooms.has(code));
    const room={
      code,hostId:socket.id,phase:"lobby",players:[],
      settings:{categoryId:"mixed",rounds:10,startingCash:100},
      round:0,deck:[],deckIndex:0,currentCard:null,auctionEndsAt:null,
      highBid:0,highBidderId:null,lastWinner:null,voteEndsAt:null,winnerId:null,
      votedBy:new Set()
    };
    room.players.push({id:socket.id,name:cleanName(name),cash:100,inventory:[],votes:0});
    rooms.set(code,room); socket.join(code); socket.data.roomCode=code;
    cb?.({ok:true,code}); emitRoom(room);
  });

  socket.on("joinRoom", ({name,code}, cb)=>{
    code=String(code||"").toUpperCase().trim();
    const room=rooms.get(code);
    if(!room) return cb?.({ok:false,error:"Sala não encontrada."});
    if(room.phase!=="lobby") return cb?.({ok:false,error:"A partida já começou."});
    if(room.players.length>=MAX_PLAYERS) return cb?.({ok:false,error:"Sala cheia."});
    room.players.push({id:socket.id,name:cleanName(name),cash:room.settings.startingCash,inventory:[],votes:0});
    socket.join(code); socket.data.roomCode=code;
    cb?.({ok:true,code}); emitRoom(room);
  });

  socket.on("settings", data=>{
    const room=getRoom(socket);
    if(!room || room.hostId!==socket.id || room.phase!=="lobby") return;
    const cat=String(data?.categoryId||"mixed");
    room.settings.categoryId = (cat==="mixed" || categories.some(c=>c.id===cat)) ? cat : "mixed";
    room.settings.rounds=Math.max(5,Math.min(25,Number(data?.rounds)||10));
    room.settings.startingCash=Math.max(50,Math.min(500,Number(data?.startingCash)||100));
    room.players.forEach(p=>p.cash=room.settings.startingCash);
    emitRoom(room);
  });

  socket.on("startGame", ()=>{
    const room=getRoom(socket);
    if(!room || room.hostId!==socket.id || room.phase!=="lobby") return;
    if(room.players.length<2) return socket.emit("toast","Entre com pelo menos 2 jogadores.");
    clearRoomTimers(room);
    room.round=0; room.deck=shuffled(getDeck(room.settings.categoryId)); room.deckIndex=0;
    room.currentCard=null; room.winnerId=null; room.lastWinner=null; room.votedBy=new Set();
    room.players.forEach(p=>{p.cash=room.settings.startingCash;p.inventory=[];p.votes=0;});
    beginAuction(room);
  });

  socket.on("bid", ({amount})=>{
    const room=getRoom(socket);
    if(!room || room.phase!=="auction") return;
    const p=room.players.find(x=>x.id===socket.id);
    if(!p) return;
    amount=Math.floor(Number(amount));
    if(!Number.isFinite(amount)) return;
    const min=room.highBid+1;
    if(amount<min) return socket.emit("toast",`O lance mínimo é ${min}.`);
    if(amount>p.cash) return socket.emit("toast","Você não tem moedas suficientes.");
    if(room.highBidderId===socket.id && amount<=room.highBid) return;

    room.highBid=amount;
    room.highBidderId=socket.id;

    // Anti-snipe: lance nos 3s finais adiciona mais 3s, no máximo 2 extensões por rodada.
    const remaining=room.auctionEndsAt-Date.now();
    room.extensions=room.extensions||0;
    if(remaining<3000 && room.extensions<2){
      room.auctionEndsAt+=3000; room.extensions++; scheduleAuctionEnd(room);
      io.to(room.code).emit("toast","⏱️ Lance no fim! +3 segundos.");
    }
    emitRoom(room); emitSound(room,"bid");
  });

  socket.on("vote", ({targetId})=>{
    const room=getRoom(socket);
    if(!room || room.phase!=="vote" || room.votedBy.has(socket.id)) return;
    if(targetId===socket.id) return socket.emit("toast","Você não pode votar em si mesmo.");
    const t=room.players.find(p=>p.id===targetId);
    if(!t) return;
    t.votes++; room.votedBy.add(socket.id);
    emitRoom(room); emitSound(room,"click");
    if(room.votedBy.size>=room.players.length) {
      clearTimeout(room.voteTimer); finishVote(room);
    }
  });

  socket.on("backToLobby", ()=>{
    const room=getRoom(socket);
    if(!room || room.hostId!==socket.id || room.phase!=="results") return;
    clearRoomTimers(room);
    room.phase="lobby"; room.round=0; room.currentCard=null; room.winnerId=null; room.lastWinner=null;
    room.players.forEach(p=>{p.cash=room.settings.startingCash;p.inventory=[];p.votes=0;});
    emitRoom(room);
  });

  socket.on("disconnect", ()=>{
    const room=getRoom(socket);
    if(!room) return;
    const wasHigh=room.highBidderId===socket.id;
    room.players=room.players.filter(p=>p.id!==socket.id);
    if(room.players.length===0){ clearRoomTimers(room); rooms.delete(room.code); return; }
    if(room.hostId===socket.id) room.hostId=room.players[0].id;
    if(wasHigh){ room.highBid=0; room.highBidderId=null; }
    emitRoom(room);
  });
});

const PORT=process.env.PORT||3000;
server.listen(PORT,()=>console.log(`Choose Everything! Auction rodando em http://localhost:${PORT}`));
