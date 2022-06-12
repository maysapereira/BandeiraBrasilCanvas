let tela = document.querySelector('canvas');
let pincel = tela.getContext('2d');

function desenhaRetanguloVerde(){
    pincel.fillStyle='green';
    pincel.fillRect(0, 0, 600, 400);
}

function desenhaLosanguloAmarelo(){
    pincel.fillStyle='yellow';
    pincel.beginPath();
    pincel.moveTo(300, 50);
    pincel.lineTo(50, 200);
    pincel.lineTo(550, 200);
    pincel.fill();

    pincel.beginPath();
    pincel.moveTo(300, 350);
    pincel.lineTo(50, 200);
    pincel.lineTo(550, 200);
    pincel.fill();
}

function desenhaCirculoAzul(){
    pincel.fillStyle='darkblue';
    pincel.beginPath();

    pincel.arc(300, 200, 100, 0, 2*3.14);
    pincel.fill();  
}

desenhaRetanguloVerde(); 
desenhaLosanguloAmarelo();
desenhaCirculoAzul();