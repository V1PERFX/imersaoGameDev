class TelaInicial {
    constructor() {

    }

    draw() {
        this._imagemFundo();
        this._texto();
        this._botao();
    }

    _imagemFundo() {
        image(imagemTelaInicial, 0, 0, width, height);
    }

    _texto() {
        textFont(fonteTelaInicial);
        textAlign(CENTER);
        fill('#FFF');
        stroke('#FF3333');
        strokeWeight(6);
        textSize(150);
        text('HERO DASH', width / 2, height / 2);
    }

    _botao() {
        botaoGerenciador.y = height / 6 * 5;
        botaoGerenciador.draw();
    }
}