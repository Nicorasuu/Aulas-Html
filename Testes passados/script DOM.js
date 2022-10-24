// DOM = DOCUMENT OBJECT MODEL

function clicou () {
    
    const button = document.querySelector ('button'); 
    
    if (button.classList.contains('azul')) {
        button.classList.replace('azul', 'verde');
    } else {
        button.classList.replace('verde', 'azul');
    } // outra maneira de alternar elementos de classe ao clicar no botao

    // button.classList.replace ('azul', 'verde'); // serve para trocar a classe, apenas uma vez ao clicar no botao
    // button.classList.toggle ('azul'); // para ficar alternando entre com azul e sem azul
   
    /*
    if(button.classList.contains('azul')) { //contains verficia se existe o elemento requisitado no html
        button.classList.remove('azul');
        button.classList.add('verde');
    } else {
        button.classList.add('azul');
        button.classList.remove('verde');
    } para alternar o bota entre 'azul' e 'verde'   */

    // button.classList.add('verde'); 
    // button.classList.remove('azul');
    console.log(button.classList); //.classList eh o responsavel pelas classes do meu elemento

    /* alterando o css/estilo de foramtacao do html atravez do js:
    const li = document.querySelector('li');

    li.style.backgroundColor = '#00F';
    li.style.fontSize = '20px';
    */
    
    /* const input = document.querySelector('input');
    const botao = document.querySelector('.botao');

    if(input.getAttribute('type') === 'text') {
        input.setAttribute('type', 'password');
        botao.innerText = 'Mostrar Senha';
    } else {
        input.setAttribute('type', 'text');
        botao.innerText = 'Ocultar Senha';
    } MANIPULANDO ATRIBUTOS DO HTML */ 

    /* if(input.hasAttribute('placeholder')) {
        console.log('Tem placeholder SIM!');
    } else {console.log('NAO tem placeholer..');
    }    
    } serve apra checar se ha um atributo epecifico no codigo */ 
    // console.log(input.getAttribute('placeholder'));


    // const teste = document.querySelector("#teste");
    // const ul = teste.querySelector('ul');

    /* adicionando elemntos em listas de uma vez so:
    let newUl = document.createElement('ul');

    for(let i = 0; i <5; i++){
        let newLi = document.createElement('li');
        newLi.innerHTML= "Item add " + (i + 1);
        newUl.append(newLi);
    }
    ul.after(newUl);
    */
    
    /* const newButton = document.createElement('button');
    newButton.innerHTML= "Botao";
    ul.before(newButton); */ // .after se quiser adicionar depois


    /* let newLi = document.createElement("li");
    newLi.innerText = "Item adicionado";

     ul.appendChild(newLi); */ // essa maneira eh mais complicada mas eh a maneira mais correta pois apenas adiciona os novos itens ao inner html ja existente
    // ul.prepend(newLi); prepend adiciona algo ao comeco do inner html, assim aaprecendo primeiro na pagina e codigo
 

    // ul.innerHTML += "<li>Item adicionado </li>"; essa maneira substiui todos os itens do html e cria novos junto com esses recema dicionados, troca 2 por 3, 3 por 4, 4 por 5 e etc entao pesa mais para rodar

    // ul.children[0].innerHTML += "(alterado)"; // assim altera total o inner html
    // ul.children[0].append("(alterado)"); // assim altera apenas a parte nova do html, apenas adiciona ao html inner existente, porem soh serve para adicionar textos

    // console.log (ul.outerHTML);
    // console.log (ul.innerHTML);
    // ul.children[0].innerHTML = "Item <strong>alterado!</strong>"; // .innerText = altera o texto apenas nao interpretando os comandos de html
    // ul.innerHTML = ul.innerHTML + "<li>Item alterado"; maneira de adicionar algo ao DOM
    // ul.outerHTML = "<strong>100% burstado meu caro amigo tixinha!</strong>" .outerHTML troca todo o corpo do html selecionado
}

//let botao = document.querySelector('.botao'); outra maneira de executar a funcao do "click"
//botao.addEventListener("click", () => {clicou()});
