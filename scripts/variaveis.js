let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoVoador;
let imagemGameOver;
let imagemTelaInicial;
let fonteTelaInicial;
let cenario;
let jogo;

let cenaAtual = 'telaInicial';
let cenas;
let telaInicial;
let botaoGerenciador;

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