/*
let nome = 'Bonieky';
let nomes = ['Bonieky', 'Pedro'];
let personagem = {
    nome: 'Bonieky', 
    idade: 90,
    pais: 'Brasil',
    olhos: ['roxo', 'azul'],
    caracteristicas: {
        forca: 20,
        magia: 5,
        stamina: 15
    }
}

console.log(personagem);
console.log(personagem.idade);
console.log(`${personagem.nome} tem ${personagem.idade} anos.`);
console.log(personagem.caracteristicas.magia);
console.log(personagem.olhos[1]);

personagem.nome = 'Pedro';
personagem.caracteristicas.forca += 10;
personagem.olhos.push('verde');

console.log(personagem.nome);
console.log(personagem.caracteristicas.forca);
console.log(personagem.olhos); */

let personagem = {
    nome: 'Bonieky',
    idade: 90,
    carros: [
        {modelo: 'Fiat', color: 'Preto'},
        {modelo: 'Ferrari', color: 'Vermelho'}
    ]
}

console.log (personagem.carros[0].color);
console.log (personagem.carros[1].modelo);