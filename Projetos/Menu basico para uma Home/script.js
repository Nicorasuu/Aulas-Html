/* function hover(){
    const button = document.querySelector ('menu-opener');
    if (button.classList.hover) {
        document.getElementById("menu-area").classList.remove(200px)
    //    input.setAttribute (#menu-area {width: '200px'});
    }
}

function clicou () {
    console.log("Clicou malandro.")
   // const button = document.querySelector ('button'); 
}
let botao = document.querySelector("botao");
botao.addEventListener("click", clicou);
console.log(document.getElementByClass("botao"))
*/

function menuToggle (){
    let menuArea = document.getElementById("menu-area");
    
    if(menuArea.classList.contains('menu-opened') === true){
        menuArea.classList.remove('menu-opened');
    } else{
        menuArea.classList.add('menu-opened');
    }
}