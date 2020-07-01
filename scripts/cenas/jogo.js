class Jogo {
    constructor() {
        this.indice = 0;
        this.mapa = fita.mapa;
    }

    setup() {
        cenarioCeu = new Cenario(imagemCenaCeu, 0);
        cenarioArvores = new Cenario(imagemCenaArvores, 1);
        cenarioChao = new Cenario(imagemCenaChao, 4);
        cenarioNuvens = new Cenario(imagemCenaNuvens, 0.90);

        pontuacao = new Pontuacao();

        vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);

        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 200, height / 5, 68, 106, 68, 106);

        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 134, height / 5, 71, 98, 71, 98, 5);

        const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 72, height / 6.66 * 3, 72, 98, 72, 98, 6);

        const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, height / 5, 72, 104, 72, 104, 4);

        inimigos.push(inimigo);
        inimigos.push(inimigoVoador);
        inimigos.push(inimigoGrande);
    }

    keyPressed(key) {
        if (key === 'ArrowUp') {
            personagem.pula();
        }
    }

    draw() {
        cenarioCeu.exibe();
        cenarioNuvens.exibe();
        cenarioArvores.exibe();
        cenarioChao.exibe();

        cenarioNuvens.move();
        cenarioArvores.move();
        cenarioChao.move();

        vida.draw();

        pontuacao.exibe();
        pontuacao.adicionarPonto();

        personagem.exibe();
        personagem.aplicaGravidade();

        const linhaAtual = this.mapa[this.indice];
        const inimigo = inimigos[linhaAtual.inimigo];
        const inimigoVisivel = inimigo.x < -inimigo.largura;

        inimigo.velocidade = linhaAtual.velocidade;

        inimigo.exibe();
        inimigo.move();

        if (inimigoVisivel) {
            this.indice++;
            inimigo.aparece();
            if (this.indice > this.mapa.length - 1) {
                this.indice = 0;
            }
        }

        if (personagem.estaColidindo(inimigo)) {
            vida.perdeVida();
            somDoHit.setVolume(0.1);
            somDoHit.play();
            personagem.tonarInvencivel();
            if (vida.vidas === 0) {
                image(imagemGameOver, width / 2 - 215, height / 3);
                somDoJogo.stop();
                noLoop();
            }
        }
    }
}