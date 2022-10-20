let fruits = ['Banana', 'Laranja', 'Maca', 'Pera', 'Uva'];

// let bigFruits = fruits.filter ((item) => item.length > 4); //modo mais simples de fazer a filtragem de itens no array

    // return item.length > 4; // outro modo de fazer
    /* if(item.length > 4) {
        return true
    } else {
        return false
    } 
}); uma maneira de fazer */ 

// console.log(bigFruits);

/*  .every eh usado para saber se todos ou nenhum item acatam aos requisitos perguntados
 let ok = fruits.every ((value) => value.length > 3);

if(ok) {
    console.log('Todos sao maior que 3.')
} else {
    console.log('Nao sao todos maior que 3.')
}

*/

/* .some eh usado para saber se algum dos itens do array cumpre o requisito solicitado
let ok = fruits.some ((value) => value.length > 3);

if(ok) {
    console.log('Algum item e maior que 3.')
} else {
    console.log('Nenhum item e maior que 3.')
} */

fruits.pop();

if(fruits.includes('Uva')) {
    console.log ('Tem uva sim!');
} else {
    console.log ('Tem uva nao meu parceiro.');
};


