/* FOR LOOP  precisa no html:  <div id="texto"></div>

let texto = ' ';

for (let i = 1; i <= 50; i++) {
    texto = texto + i + '<br/>';
}       

document.getElementById("demo").innerHTML = texto; 

*/

//FOR LOOP ARRAY   precisa no html:  <div id="demo"></div>

let carros = ['Ferrari', 'Fusca', 'Palio', 'Corolla' ];

let html = '<ul>';

for (let i in carros){
    html += '<li>'+ carros[i] + '</li>';
}

html += '<ul>';

document.getElementById("demo").innerHTML = html;