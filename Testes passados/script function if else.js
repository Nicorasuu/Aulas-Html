function maiorDeIdade(idade) {
    if (idade >= 18) {return true}
    else {return false};
}
/* let verificacao = maiorDeIdade(70);
console.log (verificacao) */

let idade = 2;
let verificacao = maiorDeIdade (idade);

if (verificacao) {console.log (`E maior de idade.`)}
else {console. log (`E menor de idade.`)};