class TelaInicial {
    constructor() {
    }

    draw() {
        this._imagemFundo();
        this._texto();
    }

    _imagemFundo() {
        image(imagemTelaInicial, 0, 0, width, height);
    }

    _texto() {
        textFont(fonteTelaInicial);
        textAlign(CENTER);
        fill('#FFCC00');
        stroke('#FF3333');
        strokeWeight(6);
        textSize(150);
        text('HERO DASH', width / 2, height / 2 - 50);
        fill('#FFF');
        stroke('#FF3333');
        strokeWeight(3);
        textSize(35);
        text('precione ENTER para iniciar', width / 2, height / 2 + 160);
        textSize(22);
        fill('#262626');
        noStroke();
        text('aperte SETA PARA CIMA para PULAR ', width / 2, height / 2 + 220);
    }

    keyPressed(key) {
        if (key === 'Enter') {
            cenaAtual = 'jogo';
            somDoJogo.loop();
            somDoJogo.setVolume(0.1);
        }
    }
}