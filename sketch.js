let imagemCenario;
let imagemPersonagem;
let cenario;
let somDoJogo;
let personagem;

function preload() {
  imagemCenario = loadImage('images/cenario/fundoFloresta.png');
  imagemPersonagem = loadImage('images/personagem/personagemCorrendo.png');
  frameRate(40);
  somDoJogo = loadSound('sounds/trilhaJogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(imagemPersonagem);
  //somDoJogo.loop();
}

function draw() {
  cenario.exibe();
  cenario.move();
  personagem.exibe();
}