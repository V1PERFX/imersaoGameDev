let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoVoador;
let imagemGameOver;
let cenario;

let somDoPulo;
let somDoJogo;
let pontuacao;

let personagem;
let inimigo;
let inimigoGrande;
let inimigoVoador;

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
const matrizInimigoGrande = [
  [0, 0],
  [129, 0],
  [258, 0],
  [387, 0],
  [0, 130],
  [129, 130],
  [258, 130],
  [387, 130],
  [0, 260],
  [129, 260],
  [258, 260],
  [387, 260],
  [0, 390],
  [129, 390],
  [258, 390],
];
const matrizInimigoVoador = [
  [0, 0],
  [72, 0],
  [144, 0],
  [216, 0],
  [0, 96],
  [72, 96],
  [144, 96],
  [216, 96],
  [0, 192],
  [72, 192],
  [144, 192],
  [216, 192],
  [0, 288],
  [72, 288],
  [144, 288],
  [216, 288],
  [0, 384],
  [72, 384],
];

const inimigos = [];

function preload() {
  imagemCenario = loadImage('images/cenario/fundoFloresta.png');
  imagemGameOver = loadImage('images/assets/gameOver.png');
  imagemPersonagem = loadImage('images/personagem/personagemCorrendo.png');
  imagemInimigo = loadImage('images/inimigos/enfermeira.png');
  imagemInimigoVoador = loadImage('images/inimigos/enfermeiroVoo.png');
  imagemInimigoGrande = loadImage('images/inimigos/doutor.png');
  somDoJogo = loadSound('sounds/trilhaJogo.mp3');
  somDoPulo = loadSound('sounds/somPulo.mp3');
  frameRate(40);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  pontuacao = new Pontuacao();

  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 131, 142, 131, 142);

  const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 134, 30, 134, 133, 134, 133, 4, 200);

  const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 72, 250, 72, 96, 72, 96, 6, 1500);

  const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 30, 129, 130, 129, 130, 3, 2500);

  inimigos.push(inimigo);
  inimigos.push(inimigoVoador);
  inimigos.push(inimigoGrande);

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

  pontuacao.exibe();
  pontuacao.adicionarPonto();

  personagem.exibe();
  personagem.aplicaGravidade();

  inimigos.forEach(inimigo => {
    inimigo.exibe();
    inimigo.move();

    if(personagem.estaColidindo(inimigo)) {
      image(imagemGameOver, width / 2 - 192, height / 3);
      noLoop();
    }
  });
}