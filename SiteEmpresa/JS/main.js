telaXMax = window.innerWidth;
telaYMax = window.innerHeight; 
style = document.getElementById("style"); 
guia = document.getElementById("ferramentas");
sessao = document.getElementsByClassName("sessao");



window.onload = function() {   
    
    
    function update() {
    
        telaX = window.innerWidth;
        telaY = window.innerHeight;
        console.log(telaX);
        
    }
    setInterval(update, 100);
}