let xCarros = [600, 600, 600, 600, 600, 600] //velocidade
let yCarros = [40, 90, 150, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.1, 3.5, 2.6, 3]
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
    for (let i = 0; i < imagemCarros.length; i++) {
        image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro); 
    }
}

function movimentaCarro(){
    for (let i = 0; i < imagemCarros.length; i++) {
         xCarros[i] -= velocidadeCarros[i];
    }
   
}

function voltaPoIniDoCarro(){
    for (let i = 0; i < imagemCarros.length; i++) {
        if (passouTodaTela (xCarros[i])){
            xCarros[i] = 600;
      }
    }
}

function passouTodaTela(xCarro) {
    return xCarro < -50;
}
