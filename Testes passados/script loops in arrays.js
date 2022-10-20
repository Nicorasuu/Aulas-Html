//let cores = ['preto', 'branco', 'azul', 'vermelho']; 

// cores.push('verde');

//for (let n = 0; n < cores.length; n++) {     
  //  console.log(cores[n]); 
//} uma maneira de fazer

// for (let i in cores) {
//    console.log(cores[i]);
//} outra maneira de fazer

//for (let cor of cores) {
//    console.log(cor);
//} ainda outra maneira de fazer

let cores = [
    {nome: 'Preto', qt: 10},
    {nome: 'Azul', qt: 5},
    {nome: 'Vermelho', qt: 15}
]

for (let cor of cores) {
    console.log(`Nome: ${cor.nome} - Quantidade: ${cor.qt}`)
}