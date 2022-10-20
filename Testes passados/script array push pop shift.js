let ingredientes = [
    'agua',
    'farinha',
    'ovo',
    'corante', 
    'sal'
];

ingredientes.push ('cebola'); // adiciona um item ao array
ingredientes.pop(); //remove o uiltimo item
ingredientes.shift(); //remove o primeiro item

console.log(ingredientes);

console.log(`Total de ingredientes: ${ingredientes.length}`);