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