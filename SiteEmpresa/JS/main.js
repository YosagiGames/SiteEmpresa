
telaXMax = window.innerWidth;
telaYMax = window.innerHeight; 
style = document.getElementById("style"); 
guia = document.getElementById("ferramentas");
sessao = document.getElementsByClassName("sessao");

hq = document.getElementById("pag");
pagAtual = 0;

const pags = 4;

window.onload = function() {   
    
    
    function update() {
    
        telaX = window.innerWidth;
        telaY = window.innerHeight;
        console.log(telaX);
        
    }
    setInterval(update, 100);
}

function prox(){
    if(pagAtual < pags){
        pagAtual++;
        console.log('essa é a pag ' + pagAtual + " de " + pags );
        hq.src = './Img/comic/'+ pagAtual +'.jpg';
    }
}
function ant(){
    if(pagAtual > 0){
        pagAtual--;
        console.log('essa é a pag ' + pagAtual );
        hq.src = './Img/comic/'+ pagAtual +'.jpg';
    }
}