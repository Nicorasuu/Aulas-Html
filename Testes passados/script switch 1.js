// precisa estar no html: <div id="dia"></div>

let dia = 6;
let diaNome = '';

/*
switch(dia){
    case 1:
        diaNome = 'Segunda-Feira';
        break;
    case 2:
        diaNome = 'Terca-Feira';
        break;
    case 3:
        diaNome = 'Quarta-Feira';
        break;
    case 4:
        diaNome = 'Quinta-Feira';
        break;
    case 5: 
        diaNome = 'Sexta-Feira';
        break;
    case 6:
        diaNome = 'Sabado';
        break;
    case 7:
        diaNome = 'Domingo';
        break;
}

document.getElementById("dia").innerHTML = "Hoje eh: "+ diaNome; */

switch(dia){
    case 6:
    case 7:
        diaNome = 'Final de Semana';
        break;
    default:
        diaNome = 'Dia Util';
        break;
}

document.getElementById("dia").innerHTML = "Hoje eh: "+diaNome;