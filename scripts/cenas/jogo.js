class Jogo {
    constructor() {
        this.inimigoAtual = 0;
    }

    setup() {
        cenario = new Cenario(imagemCenario, 3);
        pontuacao = new Pontuacao();

        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 200, 125, 68, 106, 68, 106);

        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 134, 125, 71, 98, 71, 98, 5, 100);

        const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 72, 275, 72, 98, 72, 98, 6, 100);

        const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 125, 72, 104, 72, 104, 4, 100);

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
        cenario.exibe();
        cenario.move();

        pontuacao.exibe();
        pontuacao.adicionarPonto();

        personagem.exibe();
        personagem.aplicaGravidade();

        const inimigo = inimigos[this.inimigoAtual];
        const inimigoVisivel = inimigo.x < -inimigo.largura;

        inimigo.exibe();
        inimigo.move();

        if (inimigoVisivel) {
            this.inimigoAtual++;
            if (this.inimigoAtual > 2) {
                this.inimigoAtual = 0;
            }
            inimigo.velocidade = parseInt(random(5, 30));
        }

        if (personagem.estaColidindo(inimigo)) {
            image(imagemGameOver, width / 2 - 215, height / 3);
            noLoop();
        }
    }
}