// input caixa de texto <input id="campo" type="text" nem="usuario"  value="Nome do usuário" /> 

function azul() {
    limpar();
    document.getElementById("titulo").classList.add('azul');    
}       
function vermelho() {
    limpar();
    document.getElementById("titulo").classList.add('vermelho');    
}   
function verde() {
    limpar();
    document.getElementById("titulo").classList.add('verde');    

}
function limpar(){
    document.getElementById("titulo").classList.remove('azul');    
    document.getElementById("titulo").classList.remove('vermelho');    
    document.getElementById("titulo").classList.remove('verde');    
}

function mostrarTelefone(elemento){
    elemento.style.display= 'none';
    document.getElementById("telefone").style.display = "block";
}
 