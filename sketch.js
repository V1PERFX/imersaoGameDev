function setup() {
  createCanvas(1000, 510);
  frameRate(40);
  somDoJogo.loop();
  somDoJogo.setVolume(0.1);
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  jogo.setup();
  cenas = {
    jogo,
    telaInicial
  };
  botaoGerenciador = new BotaoGerenciador('iniciar', 500, 255);
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}