function preload() {
    imagemCenario = loadImage('images/cenario/fundoFloresta.png');
    imagemGameOver = loadImage('images/assets/gameOver.png');
    imagemPersonagem = loadImage('images/personagem/personagemCorrendo.png');
    imagemInimigo = loadImage('images/inimigos/enfermeira.png');
    imagemInimigoVoador = loadImage('images/inimigos/enfermeiroVoo.png');
    imagemInimigoGrande = loadImage('images/inimigos/doutor.png');
    imagemTelaInicial = loadImage('images/assets/telaInicial.png');

    fonteTelaInicial = loadFont('images/assets/carterOneRegular.ttf');

    somDoJogo = loadSound('sounds/trilhaJogo.mp3');
    somDoPulo = loadSound('sounds/somPulo.mp3');
  }