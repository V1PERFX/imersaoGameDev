let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let cenario;
let somDoPulo;
let somDoJogo;
let personagem;
let inimigo;

const matrizInimigo = [
  [0, 0],
  [134, 0],
  [268, 0],
  [402, 0],
  [0, 133],
  [134, 133],
  [268, 133],
  [402,133],
  [0, 266],
  [134, 266],
  [268, 266],
  [402, 266],
  [0, 399],
  [134, 399],
  [268, 399],
  [402, 399],
];
const matrizPersonagem = [
  [0, 0],
  [131, 0],
  [262, 0],
  [393, 0],
  [0, 142],
  [131, 142],
  [262, 142],
  [393, 142],
];

function preload() {
  imagemCenario = loadImage('images/cenario/fundoFloresta.png');
  imagemPersonagem = loadImage('images/personagem/personagemCorrendo.png');
  imagemInimigo = loadImage('images/inimigos/enfermeira.png');
  frameRate(40);
  somDoJogo = loadSound('sounds/trilhaJogo.mp3');
  somDoPulo = loadSound('sounds/somPulo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 131, 142, 131, 142);
  inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 100, 134, 133, 134, 133);
  //somDoJogo.loop();
}

function keyPressed() {
  if(key === 'ArrowUp') {
    personagem.pula();
    somDoPulo.play();
  }
}

function draw() {
  cenario.exibe();
  cenario.move();

  personagem.exibe();
  personagem.aplicaGravidade();

  inimigo.exibe();
  inimigo.move();

  if(personagem.estaColidindo(inimigo)) {
    console.log('colidiu');
    noLoop();
  }
}