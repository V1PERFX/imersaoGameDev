function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  //somDoJogo.loop();
  somDoJogo.setVolume(0.1);
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  jogo.setup();
  cenas = {
    jogo,
    telaInicial
  };
  botaoGerenciador = new BotaoGerenciador('iniciar', width / 2, height / 2);
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}