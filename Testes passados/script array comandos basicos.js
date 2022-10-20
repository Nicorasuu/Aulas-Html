let fruits = ['Maca', 'Uva', 'Laranja', 'Banana'];
// fruits.push('Kiwi'); //adicionar o ultimo
// fruits.pop(); //deletar o ultimo
// fruits.shift() //deletar o primeiro

// console.log(fruits.length);
// fruits[0] = 'Pera'; //colocar o numero do index altera o item correspondente no array
fruits[fruits.length -1] = 'Pera' //maneira de alterar o ultimo item sem saber o numero de itens 

console.log(fruits.join(', '));
console.log(fruits.join(' => '));

