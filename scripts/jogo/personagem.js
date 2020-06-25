class Personagem extends Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
        
        this.variacaoY = variacaoY;
        this.yInicial = height - this.altura - this.variacaoY;
        this.y = this.yInicial;
        this.velocidadePulo = 0;
        this.gravidade = 2;
        this.alturaPulo = -20;
        this.pulos = 0;
    }

    pula() {
        if(this.pulos < 2) {
            this.velocidadePulo = this.alturaPulo;
            this.pulos++;
            somDoPulo.play();
        }
    }

    aplicaGravidade() {
        this.y = this.y + this.velocidadePulo;
        this.velocidadePulo = this.velocidadePulo + this.gravidade;

        if(this.y > this.yInicial) {
            this.y = this.yInicial;
            this.pulos = 0;
        } 
    }

    estaColidindo(inimigo) {
        /* DEBUG 
        noFill();
        rect(this.x, this.y, this.largura, this.altura);
        rect(inimigo.x, inimigo.y, inimigo.largura, inimigo.altura);
         /.DEBUG */
        const precisao = .6;
        const colisao = collideRectRect(this.x, this.y, this.largura * precisao, this.altura * precisao, inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura * precisao);

        return colisao;
    }
}

