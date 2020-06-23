class Personagem {
    constructor(imagem) {
        //define a altura e largura mostrada dentro da imagem
        this.larguraPesonagem = 131;
        this.alturaPersonagem = 142;
        //chama a imagem, cria a matriz e define o frame atual
        this.imagem = imagem;
        this.matriz = criarMatriz(imagem, this.larguraPesonagem, this.alturaPersonagem);
        this.frameAtual = 0;
    }

    exibe() {
        //ajusta o tamanho do personagem (antigo valor era metade do larguraPersonagem)
        let larguraImagem = 131;
        let alturaImagem = 142;
        //se o personagem acima se manter substituir essas variaveis*
        let xImagem = 0;
        let yImagem = height - alturaImagem;
        //x e y dentro da imagem do personagem com todos os frames da animação
        let xPersonagem = this.matriz[this.frameAtual][0];
        let yPersonagem = this.matriz[this.frameAtual][1];

        image(
            this.imagem,
            xImagem,
            yImagem,
            larguraImagem,
            alturaImagem,
            xPersonagem,
            yPersonagem,
            this.larguraPesonagem,
            this.alturaPersonagem
        );
        this.anima();
    }

    anima() {
        this.frameAtual++;

        if(this.frameAtual >= this.matriz.length - 1) {
            this.frameAtual = 0;
        }
    }
}

function criarMatriz(imagem, larguraPersonagem, alturaPesonagem) {
    let matriz = [];
    for (x = 0; x < imagem.height; x += alturaPesonagem) {
        for (i = 0; i < imagem.width; i += larguraPersonagem) {
            matriz.push([i, x]);
        }
        i = 0;
    }
    return matriz;
}