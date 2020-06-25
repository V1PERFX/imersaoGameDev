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

const matrizPersonagem = [
  [0, 0],
  [68, 0],
  [136, 0],
  [204, 0],
  [0, 106],
  [68, 106],
  [136, 106],
  [204, 106],
];
const matrizInimigo = [
  [0, 0],
  [71, 0],
  [142, 0],
  [213, 0],
  [0, 98],
  [71, 98],
  [142, 98],
  [213, 98],
  [0, 196],
  [71, 196],
  [142, 196],
  [213, 196],
  [0, 294],
  [71, 294],
  [142, 294],
  [213, 294],
];
const matrizInimigoGrande = [
  [0, 0],
  [72, 0],
  [144, 0],
  [216, 0],
  [0, 104],
  [72, 104],
  [144, 104],
  [216, 104],
  [0, 208],
  [72, 208],
  [144, 208],
  [216, 208],
  [0, 312],
  [72, 312],
  [144, 312],
];
const matrizInimigoVoador = [
  [0, 0],
  [72, 0],
  [144, 0],
  [216, 0],
  [0, 98],
  [72, 98],
  [144, 98],
  [216, 98],
  [0, 196],
  [72, 196],
  [144, 196],
  [216, 196],
  [0, 294],
  [72, 294],
  [144, 294],
  [216, 294],
  [0, 392],
  [72, 392],
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

  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 80, 125, 68, 106, 68, 106);

  const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 134, 125, 71, 98, 71, 98, 5, 200);

  const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 72, 275, 72, 98, 72, 98, 6, 1500);

  const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 125, 72, 104, 72, 104, 4, 2500);

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