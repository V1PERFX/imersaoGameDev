function preload() {
  /* IMAGENS DO CENARIO */
  imagemCenaCeu = loadImage('images/cenario/ceu.png');
  imagemCenaArvores = loadImage('images/cenario/arvores.png');
  imagemCenaChao = loadImage('images/cenario/chao.png');
  imagemCenaNuvens = loadImage('images/cenario/nuvens.png');
  /* ASSETS GERAIS */
  imagemGameOver = loadImage('images/assets/gameOver.png');
  imagemTelaInicial = loadImage('images/assets/telaInicial.png');
  imagemVida = loadImage('images/assets/vida.png');
  /* IMAGENS DO PERSONAGEM */
  imagemPersonagem = loadImage('images/personagem/personagemCorrendo.png');
  imagemPersonagemPulando = loadImage('images/personagem/personagemPulando.png');
  /* IMAGENS DOS INIMIGOS */
  imagemInimigo = loadImage('images/inimigos/enfermeira.png');
  imagemInimigoVoador = loadImage('images/inimigos/enfermeiroVoo.png');
  imagemInimigoGrande = loadImage('images/inimigos/doutor.png');
  /* FONT USADA */
  fonteTelaInicial = loadFont('images/assets/carterOneRegular.ttf');
  /* JSON DE SETUP */
  fita = loadJSON('fita/fita.json');
  /* SONS */
  somDoJogo = loadSound('sounds/trilhaJogo.mp3');
  somDoPulo = loadSound('sounds/somPulo.mp3');
  somDoHit = loadSound('sounds/somHit.wav');
}