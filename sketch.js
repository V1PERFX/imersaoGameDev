function setup() {
  createCanvas(1000, 510);
  frameRate(40);
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  jogo.setup();
  cenas = {
    jogo,
    telaInicial
  };
}

function keyPressed() {
  jogo.keyPressed(key);
  telaInicial.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}