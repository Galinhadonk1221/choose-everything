
const categories = [
  {
    id:"anime", name:"Anime", icon:"⚡",
    cards:[
      ["goku","Goku","Goku",99,"Lendário"],["vegeta","Vegeta","Vegeta",96,"Lendário"],
      ["saitama","Saitama","Saitama",99,"Lendário"],["gojo","Gojo Satoru","Satoru Gojo",95,"Mítico"],
      ["sukuna","Sukuna","Ryomen Sukuna",98,"Lendário"],["naruto","Naruto","Naruto Uzumaki",96,"Lendário"],
      ["sasuke","Sasuke","Sasuke Uchiha",94,"Mítico"],["luffy","Luffy","Monkey D. Luffy",97,"Lendário"],
      ["zoro","Zoro","Roronoa Zoro",91,"Mítico"],["ichigo","Ichigo","Ichigo Kurosaki",97,"Lendário"],
      ["aizen","Aizen","Sosuke Aizen",98,"Lendário"],["tanjiro","Tanjiro","Tanjiro Kamado",84,"Épico"],
      ["zenitsu","Zenitsu","Zenitsu Agatsuma",82,"Épico"],["eren","Eren","Eren Yeager",90,"Mítico"],
      ["levi","Levi","Levi Ackerman",88,"Épico"],["deku","Deku","Izuku Midoriya",89,"Épico"],
      ["allmight","All Might","All Might",92,"Mítico"],["asta","Asta","Asta Black Clover",91,"Mítico"],
      ["yuno","Yuno","Yuno Grinberryall",90,"Mítico"],["gon","Gon","Gon Freecss",84,"Épico"],
      ["killua","Killua","Killua Zoldyck",86,"Épico"],["madara","Madara","Madara Uchiha",97,"Lendário"],
      ["itachi","Itachi","Itachi Uchiha",92,"Mítico"],["giorno","Giorno","Giorno Giovanna",96,"Lendário"]
    ]
  },
  {
    id:"heroes", name:"Super-heróis", icon:"🦸",
    cards:[
      ["superman","Superman","Superman",99,"Lendário"],["thor","Thor","Thor Marvel Comics",98,"Lendário"],
      ["hulk","Hulk","Hulk",97,"Lendário"],["flash","Flash","Flash DC Comics",99,"Lendário"],
      ["wonder","Mulher-Maravilha","Wonder Woman",95,"Mítico"],["strange","Doutor Estranho","Doctor Strange",96,"Mítico"],
      ["ironman","Homem de Ferro","Iron Man",90,"Mítico"],["spiderman","Homem-Aranha","Spider-Man",89,"Épico"],
      ["batman","Batman","Batman",87,"Épico"],["captain","Capitão América","Captain America",84,"Épico"],
      ["wanda","Feiticeira Escarlate","Scarlet Witch",98,"Lendário"],["vision","Visão","Vision Marvel Comics",91,"Mítico"],
      ["aquaman","Aquaman","Aquaman",88,"Épico"],["greenlantern","Lanterna Verde","Green Lantern",94,"Mítico"],
      ["shazam","Shazam","Shazam DC Comics",94,"Mítico"],["blackpanther","Pantera Negra","Black Panther character",86,"Épico"]
    ]
  },
  {
    id:"villains", name:"Vilões", icon:"😈",
    cards:[
      ["thanos","Thanos","Thanos",99,"Lendário"],["darkseid","Darkseid","Darkseid",99,"Lendário"],
      ["joker","Coringa","Joker character",82,"Épico"],["doom","Doutor Destino","Doctor Doom",98,"Lendário"],
      ["magneto","Magneto","Magneto Marvel Comics",95,"Mítico"],["loki","Loki","Loki Marvel Comics",91,"Mítico"],
      ["venom","Venom","Venom character",88,"Épico"],["ultron","Ultron","Ultron",93,"Mítico"],
      ["greenGoblin","Duende Verde","Green Goblin",84,"Épico"],["reverseflash","Flash Reverso","Eobard Thawne",97,"Lendário"],
      ["darthvader","Darth Vader","Darth Vader",94,"Mítico"],["homelander","Homelander","Homelander",91,"Mítico"],
      ["omniman","Omni-Man","Omni-Man",96,"Lendário"],["frieza","Freeza","Frieza",98,"Lendário"],
      ["muzan","Muzan","Muzan Kibutsuji",90,"Mítico"],["meruem","Meruem","Meruem",92,"Mítico"]
    ]
  },
  {
    id:"games", name:"Games", icon:"🎮",
    cards:[
      ["kratos","Kratos","Kratos God of War",99,"Lendário"],["steve","Steve","Steve Minecraft",96,"Lendário"],
      ["sonic","Sonic","Sonic the Hedgehog character",97,"Lendário"],["mario","Mario","Mario character",92,"Mítico"],
      ["link","Link","Link The Legend of Zelda",93,"Mítico"],["kirby","Kirby","Kirby character",98,"Lendário"],
      ["doomguy","Doom Slayer","Doom Slayer",98,"Lendário"],["masterchief","Master Chief","Master Chief",92,"Mítico"],
      ["samus","Samus","Samus Aran",93,"Mítico"],["cloud","Cloud","Cloud Strife",91,"Mítico"],
      ["sephiroth","Sephiroth","Sephiroth Final Fantasy",96,"Lendário"],["geralt","Geralt","Geralt of Rivia",88,"Épico"],
      ["arthur","Arthur Morgan","Arthur Morgan",78,"Raro"],["lara","Lara Croft","Lara Croft",83,"Épico"],
      ["sans","Sans","Sans Undertale",90,"Mítico"],["fortnite","Jonesy","Jonesy Fortnite",74,"Raro"]
    ]
  },
  {
    id:"food", name:"Comidas", icon:"🍕",
    cards:[
      ["pizza","Pizza","Pizza",95,"Lendário"],["sushi","Sushi","Sushi",92,"Mítico"],
      ["burger","Hambúrguer","Hamburger",90,"Mítico"],["bbq","Churrasco","Churrasco Brazilian barbecue",96,"Lendário"],
      ["lasagna","Lasanha","Lasagna",89,"Épico"],["tacos","Tacos","Taco",88,"Épico"],
      ["pasta","Macarrão","Pasta",86,"Épico"],["fries","Batata Frita","French fries",84,"Épico"],
      ["acai","Açaí","Açaí na tigela",86,"Épico"],["icecream","Sorvete","Ice cream",90,"Mítico"],
      ["brigadeiro","Brigadeiro","Brigadeiro",88,"Épico"],["coxinha","Coxinha","Coxinha",87,"Épico"],
      ["paoqueijo","Pão de Queijo","Pão de queijo",89,"Épico"],["ramen","Ramen","Ramen",91,"Mítico"],
      ["steak","Bife","Steak",86,"Épico"],["chocolate","Chocolate","Chocolate",94,"Mítico"]
    ]
  },
  {
    id:"animals", name:"Animais", icon:"🦁",
    cards:[
      ["elephant","Elefante","African bush elephant",95,"Mítico"],["tiger","Tigre","Tiger",94,"Mítico"],
      ["lion","Leão","Lion",92,"Mítico"],["polarBear","Urso Polar","Polar bear",93,"Mítico"],
      ["gorilla","Gorila","Gorilla",91,"Mítico"],["rhino","Rinoceronte","Rhinoceros",94,"Mítico"],
      ["hippo","Hipopótamo","Hippopotamus",95,"Mítico"],["wolf","Lobo","Wolf",84,"Épico"],
      ["eagle","Águia","Golden eagle",82,"Épico"],["croc","Crocodilo","Nile crocodile",90,"Mítico"],
      ["shark","Tubarão Branco","Great white shark",95,"Mítico"],["orca","Orca","Orca",97,"Lendário"],
      ["cobra","Cobra-real","King cobra",87,"Épico"],["komodo","Dragão-de-Komodo","Komodo dragon",88,"Épico"],
      ["honeybadger","Ratel","Honey badger",80,"Épico"],["goose","Ganso","Goose",65,"Raro"]
    ]
  },
  {
    id:"dinosaurs", name:"Dinossauros", icon:"🦖",
    cards:[
      ["trex","T. rex","Tyrannosaurus",99,"Lendário"],["spino","Spinosaurus","Spinosaurus",98,"Lendário"],
      ["giga","Giganotosaurus","Giganotosaurus",97,"Lendário"],["carcha","Carcharodontosaurus","Carcharodontosaurus",96,"Lendário"],
      ["theri","Therizinosaurus","Therizinosaurus",91,"Mítico"],["trike","Triceratops","Triceratops",92,"Mítico"],
      ["anky","Ankylosaurus","Ankylosaurus",90,"Mítico"],["stego","Stegosaurus","Stegosaurus",88,"Épico"],
      ["raptor","Velociraptor","Velociraptor",82,"Épico"],["deino","Deinonychus","Deinonychus",84,"Épico"],
      ["brachio","Brachiosaurus","Brachiosaurus",90,"Mítico"],["argentino","Argentinosaurus","Argentinosaurus",94,"Mítico"],
      ["ptera","Pteranodon","Pteranodon",79,"Raro"],["mosasaur","Mosasaurus","Mosasaurus",97,"Lendário"],
      ["dilo","Dilophosaurus","Dilophosaurus",78,"Raro"],["pachy","Pachycephalosaurus","Pachycephalosaurus",76,"Raro"]
    ]
  },
  {
    id:"mythology", name:"Mitologia", icon:"🏛️",
    cards:[
      ["zeus","Zeus","Zeus",99,"Lendário"],["odin","Odin","Odin",99,"Lendário"],
      ["thorMyth","Thor Mitológico","Thor",98,"Lendário"],["hercules","Hércules","Heracles",96,"Lendário"],
      ["ares","Ares","Ares",94,"Mítico"],["athena","Atena","Athena",94,"Mítico"],
      ["poseidon","Poseidon","Poseidon",98,"Lendário"],["hades","Hades","Hades",97,"Lendário"],
      ["anubis","Anúbis","Anubis",94,"Mítico"],["ra","Rá","Ra deity",98,"Lendário"],
      ["sunwukong","Sun Wukong","Monkey King",99,"Lendário"],["achilles","Aquiles","Achilles",91,"Mítico"],
      ["medusa","Medusa","Medusa",89,"Épico"],["fenrir","Fenrir","Fenrir",96,"Lendário"],
      ["minotaur","Minotauro","Minotaur",88,"Épico"],["kraken","Kraken","Kraken",96,"Lendário"]
    ]
  },
  {
    id:"movies", name:"Filmes & Séries", icon:"🎬",
    cards:[
      ["neo","Neo","Neo The Matrix",94,"Mítico"],["terminator","Exterminador","Terminator character",93,"Mítico"],
      ["johnwick","John Wick","John Wick character",88,"Épico"],["rocky","Rocky","Rocky Balboa",81,"Épico"],
      ["ramb","Rambo","John Rambo",84,"Épico"],["gandalf","Gandalf","Gandalf",97,"Lendário"],
      ["aragorn","Aragorn","Aragorn",90,"Mítico"],["legolas","Legolas","Legolas",89,"Épico"],
      ["eleven","Eleven","Eleven Stranger Things",91,"Mítico"],["walter","Walter White","Walter White Breaking Bad",75,"Raro"],
      ["homelander2","Homelander","Homelander",93,"Mítico"],["butcher","Billy Butcher","Billy Butcher",84,"Épico"],
      ["davyjones","Davy Jones","Davy Jones Pirates of the Caribbean",90,"Mítico"],["jack","Jack Sparrow","Jack Sparrow",80,"Épico"],
      ["godzilla","Godzilla","Godzilla",99,"Lendário"],["kong","King Kong","King Kong",96,"Lendário"]
    ]
  },
  {
    id:"cartoons", name:"Desenhos", icon:"📺",
    cards:[
      ["ben10","Ben 10","Ben Tennyson",98,"Lendário"],["rick","Rick Sanchez","Rick Sanchez",97,"Lendário"],
      ["morty","Morty","Morty Smith",72,"Raro"],["finn","Finn","Finn the Human",87,"Épico"],
      ["jake","Jake","Jake the Dog",90,"Mítico"],["samurai","Samurai Jack","Samurai Jack",92,"Mítico"],
      ["aang","Aang","Aang",95,"Mítico"],["korra","Korra","Korra",92,"Mítico"],
      ["po","Po","Po Kung Fu Panda",91,"Mítico"],["shrek","Shrek","Shrek character",89,"Épico"],
      ["scooby","Scooby-Doo","Scooby-Doo character",73,"Raro"],["bugs","Pernalonga","Bugs Bunny",94,"Mítico"],
      ["tom","Tom","Tom Cat",83,"Épico"],["jerry","Jerry","Jerry Mouse",85,"Épico"],
      ["spongebob","Bob Esponja","SpongeBob SquarePants character",90,"Mítico"],["patrick","Patrick","Patrick Star",78,"Raro"]
    ]
  },
  {
    id:"football", name:"Futebol", icon:"⚽",
    cards:[
      ["pele","Pelé","Pelé",99,"Lendário"],["messi","Messi","Lionel Messi",99,"Lendário"],
      ["cr7","Cristiano Ronaldo","Cristiano Ronaldo",99,"Lendário"],["maradona","Maradona","Diego Maradona",98,"Lendário"],
      ["ronaldo","Ronaldo Fenômeno","Ronaldo Brazilian footballer",98,"Lendário"],["ronaldinho","Ronaldinho","Ronaldinho",97,"Lendário"],
      ["neymar","Neymar","Neymar",95,"Mítico"],["mbappe","Mbappé","Kylian Mbappé",95,"Mítico"],
      ["haaland","Haaland","Erling Haaland",94,"Mítico"],["zidane","Zidane","Zinedine Zidane",97,"Lendário"],
      ["henry","Thierry Henry","Thierry Henry",95,"Mítico"],["maldini","Maldini","Paolo Maldini",96,"Lendário"],
      ["ramos","Sergio Ramos","Sergio Ramos",93,"Mítico"],["buffon","Buffon","Gianluigi Buffon",95,"Mítico"],
      ["modric","Modrić","Luka Modrić",94,"Mítico"],["iniesta","Iniesta","Andrés Iniesta",95,"Mítico"]
    ]
  },
  {
    id:"cars", name:"Carros", icon:"🏎️",
    cards:[
      ["veyron","Bugatti Veyron","Bugatti Veyron",95,"Mítico"],["chiron","Bugatti Chiron","Bugatti Chiron",99,"Lendário"],
      ["laferrari","LaFerrari","LaFerrari",98,"Lendário"],["p1","McLaren P1","McLaren P1",98,"Lendário"],
      ["918","Porsche 918","Porsche 918 Spyder",98,"Lendário"],["senna","McLaren Senna","McLaren Senna",96,"Lendário"],
      ["gtr","Nissan GT-R","Nissan GT-R",91,"Mítico"],["supra","Toyota Supra","Toyota Supra",90,"Mítico"],
      ["r34","Skyline GT-R R34","Nissan Skyline GT-R R34",93,"Mítico"],["f40","Ferrari F40","Ferrari F40",96,"Lendário"],
      ["countach","Lamborghini Countach","Lamborghini Countach",94,"Mítico"],["aventador","Lamborghini Aventador","Lamborghini Aventador",95,"Mítico"],
      ["911","Porsche 911 GT3 RS","Porsche 911 GT3",94,"Mítico"],["mustang","Ford Mustang","Ford Mustang",87,"Épico"],
      ["civic","Honda Civic Type R","Honda Civic Type R",85,"Épico"],["miata","Mazda MX-5","Mazda MX-5",82,"Épico"]
    ]
  },
  {
    id:"technology", name:"Tecnologia", icon:"💻",
    cards:[
      ["supercomputer","Supercomputador","Supercomputer",99,"Lendário"],["quantum","Computador Quântico","Quantum computing",99,"Lendário"],
      ["ai","Inteligência Artificial","Artificial intelligence",98,"Lendário"],["satellite","Satélite","Satellite",94,"Mítico"],
      ["rocket","Foguete","Rocket",98,"Lendário"],["robot","Robô Humanoide","Humanoid robot",93,"Mítico"],
      ["drone","Drone","Quadcopter",85,"Épico"],["vr","Realidade Virtual","Virtual reality headset",88,"Épico"],
      ["smartphone","Smartphone","Smartphone",86,"Épico"],["gpu","GPU","Graphics processing unit",92,"Mítico"],
      ["server","Data Center","Data center",95,"Mítico"],["3dprinter","Impressora 3D","3D printing",87,"Épico"],
      ["tesla","Tesla Coil","Tesla coil",91,"Mítico"],["camera","Câmera Profissional","Digital camera",82,"Épico"],
      ["console","Console","Video game console",84,"Épico"],["keyboard","Teclado Mecânico","Computer keyboard",72,"Raro"]
    ]
  },
  {
    id:"horror", name:"Terror", icon:"👻",
    cards:[
      ["pennywise","Pennywise","Pennywise",96,"Lendário"],["freddy","Freddy Krueger","Freddy Krueger",94,"Mítico"],
      ["jason","Jason Voorhees","Jason Voorhees",92,"Mítico"],["michael","Michael Myers","Michael Myers",90,"Mítico"],
      ["chucky","Chucky","Chucky character",80,"Épico"],["ghostface","Ghostface","Ghostface Scream",82,"Épico"],
      ["xenomorph","Xenomorfo","Xenomorph",95,"Mítico"],["predator","Predador","Predator fictional character",94,"Mítico"],
      ["demogorgon","Demogorgon","Demogorgon Stranger Things",91,"Mítico"],["vecna","Vecna","Vecna Stranger Things",95,"Mítico"],
      ["slender","Slender Man","Slender Man",89,"Épico"],["annabelle","Annabelle","Annabelle doll",83,"Épico"],
      ["nun","A Freira","Valak The Nun",88,"Épico"],["alien","Alien Grey","Grey alien",78,"Raro"],
      ["zombie","Zumbi","Zombie",72,"Raro"],["werewolf","Lobisomem","Werewolf",86,"Épico"]
    ]
  },
  {
    id:"random", name:"Tudo Misturado", icon:"🎲",
    cards:[
      ["meteor","Meteoro","Meteor",99,"Lendário"],["blackhole","Buraco Negro","Black hole",100,"Lendário"],
      ["volcano","Vulcão","Volcano",96,"Lendário"],["tank","Tanque","Main battle tank",91,"Mítico"],
      ["dragon","Dragão","Dragon",98,"Lendário"],["wizard","Mago","Wizard fantasy",93,"Mítico"],
      ["ninja","Ninja","Ninja",86,"Épico"],["samurai","Samurai","Samurai",87,"Épico"],
      ["pirate","Pirata","Pirate",78,"Raro"],["knight","Cavaleiro","Knight",81,"Épico"],
      ["laser","Laser","Laser",92,"Mítico"],["chainsaw","Motosserra","Chainsaw",77,"Raro"],
      ["pan","Frigideira","Frying pan",55,"Comum"],["spoon","Colher","Spoon",35,"Comum"],
      ["rubberduck","Pato de Borracha","Rubber duck",25,"Comum"],["sock","Meia","Sock",15,"Comum"]
    ]
  }
].map(category => ({
  ...category,
  cards: category.cards.map(([id,name,wiki,power,rarity]) => ({id,name,wiki,power,rarity}))
}));

module.exports = { categories };
