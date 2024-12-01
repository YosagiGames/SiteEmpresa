
hq = document.getElementById("pag");
pagAtual = 0;

const pags = 9;

function prox(){
    if(pagAtual < pags){
        pagAtual++;
        hq.src = './Img/comic/'+ pagAtual +'.jpg';
    }
}
function ant(){
    if(pagAtual > 0){
        pagAtual--;
        hq.src = './Img/comic/'+ pagAtual +'.jpg';
    }
}