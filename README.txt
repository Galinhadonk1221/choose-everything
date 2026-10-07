CHOOSE EVERYTHING! — AUCTION V2
================================

NOVIDADES
- Multiplayer por salas/código.
- Leilão em rodadas: quem der mais leva o item.
- Lances rápidos +1, +5, +10, +25 e lance personalizado.
- Timer por rodada.
- Anti-snipe: lance nos 3s finais pode adicionar +3s (até 2 vezes).
- Moedas individuais e inventário/coleção.
- Votação final na melhor coleção.
- Sons gerados no navegador (sem arquivos externos): lance, início de rodada, venda, votação e vitória.
- Botão para ligar/desligar som.
- Imagens automáticas para TODOS os itens usando busca de miniaturas da Wikipedia.
- Se não existir imagem, o site cria uma arte-placeholder automaticamente.
- 15 categorias e 248 opções.
- Até 12 jogadores por sala.
- Host escolhe categoria, 5–25 rodadas e 50–500 moedas iniciais.
- Layout responsivo para PC e celular.

COMO ABRIR
1. Instale Node.js LTS (18 ou superior).
2. Extraia esta pasta.
3. No Windows, dê dois cliques em START_WINDOWS.bat.
   OU abra o terminal nesta pasta e rode:
      npm install
      npm start
4. Abra:
      http://localhost:3000

PARA JOGAR COM AMIGOS PELA INTERNET
Você precisa hospedar a pasta em um serviço que rode Node.js + WebSocket/Socket.IO,
por exemplo Render, Railway, Replit, Fly.io ou um VPS.
Comandos típicos:
- Build: npm install
- Start: npm start

FOTOS
As imagens são buscadas automaticamente pela API pública da Wikipedia usando o campo "wiki"
de cada carta. Isso evita ter de cadastrar manualmente centenas de URLs.
Nem todo personagem possui imagem disponível/licenciada na Wikipedia; nesses casos aparece
uma arte-placeholder com o nome. Você pode trocar qualquer termo "wiki" em cards.js.

ARQUIVOS IMPORTANTES
- server.js -> salas, leilão, lances, votação, imagens
- cards.js -> categorias e itens
- public/index.html -> interface, animações e sons
