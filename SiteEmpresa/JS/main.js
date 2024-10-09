telaX = window.innerWidth; // tamanho max = 1920
telaY = window.innerHeight; // tamanho max = 944
guia = document.getElementById("ferramentas");
sessao = document.getElementsByClassName("sessao");



window.onload = function() {   
    
    
    function update() {
    
        telaX = window.innerWidth;
        telaY = window.innerHeight;
        console.log(telaX);
        if(telaX < 1920 / 2){
            console.log('metade');
        }
        
    }
    setInterval(update, 100);
}