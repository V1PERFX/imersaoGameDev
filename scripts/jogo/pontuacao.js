class Pontuacao {
    constructor() {
        this.pontos = 0;
    }

    exibe() {
        textFont(fonteTelaInicial)
        textAlign(RIGHT);
        fill('#FFF');
        stroke('#FF3333');
        strokeWeight(4);
        textSize(50);
        text(parseInt(this.pontos), width - 30, 60);
    }

    adicionarPonto() {
        this.pontos = this.pontos + 0.1;
    }
}