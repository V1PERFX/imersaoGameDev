class Personagem extends Animacao {
    constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) {
        super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite);
        
        this.yInicial = height - this.altura;
        this.y = this.yInicial;
        this.velocidadePulo = 0;
        this.gravidade = 3;
    }

    pula() {
        this.velocidadePulo = -30;
    }

    aplicaGravidade() {
        this.y = this.y + this.velocidadePulo;
        this.velocidadePulo = this.velocidadePulo + this.gravidade;

        if(this.y > this.yInicial) {
            this.y = this.yInicial;
        } 
    }

    estaColidindo(inimigo) {
        /* DEBUG */
        noFill();
        rect(this.x, this.y, this.largura, this.altura);
        rect(inimigo.x, inimigo.y, inimigo.largura, inimigo.altura);
        /* /.DEBUG */
        const precisao = .5;
        const colisao = collideRectRect(this.x, this.y, this.largura * precisao, this.altura * precisao, inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura * precisao);

        return colisao;
    }
}

