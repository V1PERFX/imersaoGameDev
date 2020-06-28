function preload() {
  imagemCenaCeu = loadImage('images/cenario/ceu.png');
  imagemCenaArvores = loadImage('images/cenario/arvores.png');
  imagemCenaChao = loadImage('images/cenario/chao.png');
  imagemCenaNuvens = loadImage('images/cenario/nuvens.png');
  imagemGameOver = loadImage('images/assets/gameOver.png');
  imagemPersonagem = loadImage('images/personagem/personagemCorrendo.png');
  imagemInimigo = loadImage('images/inimigos/enfermeira.png');
  imagemInimigoVoador = loadImage('images/inimigos/enfermeiroVoo.png');
  imagemInimigoGrande = loadImage('images/inimigos/doutor.png');
  imagemTelaInicial = loadImage('images/assets/telaInicial.png');
  imagemVida = loadImage('images/assets/vida.png');

  fonteTelaInicial = loadFont('images/assets/carterOneRegular.ttf');
  fita = loadJSON('fita/fita.json');

  somDoJogo = loadSound('sounds/trilhaJogo.mp3');
  somDoPulo = loadSound('sounds/somPulo.mp3');
}