let xAtor = 85;
let yAtor = 370;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
     image(imagemDoAtor, xAtor, yAtor, 27, 26);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
        yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
        if (podeSeMover()) {
            yAtor += 3;
        }
  }
}

function verificaColisao() {
   for (let i = 0; i < imagemCarros.length; i++) {
        colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
            if (colisao) {
                somDaColisao.play();
                voltaAtorParaPosicaoIni();
                if (pontosMaiorQueZero()) {
                    meusPontos -= 1;
                }
            }
   } 
}

function  voltaAtorParaPosicaoIni() {
    yAtor = 366;
}

function incluiPontos() {
    fill(148,0,211)
    textSize(25)
    textAlign(CENTER);
    text(meusPontos, width / 5, 27);
}

function marcaPonto() {
    if (yAtor < 6) {
        somDoPonto.play();
        meusPontos +=1;
        voltaAtorParaPosicaoIni();
    }
}

function pontosMaiorQueZero() {
    return meusPontos > 0 ;
}

function podeSeMover() {
    return yAtor < 370;
}