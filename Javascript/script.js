//REVISANDO DOM:

//Alterando um elemento do HTML da pagina:

//document.getElementById("exemplo").innerHTML = "Pedro <button>Button</button>"

//Alterando os elementos pela Classe: 
//document.getElementsByClassName("lista")[0].innerHTML = 'Arroz, Feijao, Carne'

// alterando com querySelector: //PODE USAR querySelectorAll tbm 
//document.querySelector(".lista").innerHTML = 'FODA-SE';

/* alterando elementos com um click:
script:
function verde(){
    document.querySelector('#exemplo').classList.add('verde');
    document.querySelector('#exemplo').classList.remove('azul', 'vermelho')
}

function vermelho(){
    document.querySelector('#exemplo').classList.add('vermelho');
    document.querySelector('#exemplo').classList.remove('azul', 'verde');
}

function azul(){
    document.querySelector('#exemplo').classList.add('azul');
    document.querySelector('#exemplo').classList.remove('vermelho', 'verde');
}

css: 
#exemplo{
    width: 200px;
    height: 200px;
    margin: 20px;
    border: 1px solid #ccc; 
}

.verde {
    background-color: #0f0;
}

.vermelho{
    background-color: #f00;
}

.azul{
    background-color: #00f;
}
HTML:
    <button onclick="verde()">Verde</button>;
    <button onclick="vermelho()">Vermelho</button>;
    <button onclick="azul()">Azul</button>;

*/

/* botao para remover e adicionar algo no elemento:
function trocar(){
    if (document.querySelector('button').classList.contains("preto")){
        document.querySelector('button').classList.remove('preto');
        document.querySelector('button').classList.add('verde');
    } else {
        document.querySelector('button').classList.remove('verde');
        document.querySelector('button').classList.add('preto');
    };
} 

css: 
.preto {
    background-color: #000;
    color: #fff;
}

.verde{
    background-color: #0f0;
    color: #000;
}

HTML:

    <button onclick="trocar()" class="preto">botao</button>

*/

// typeof idade;  typeof ---; exibe qual o tipo da varaivel no codigo

