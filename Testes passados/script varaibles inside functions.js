function add () {
    count++;
}

let count = 0;

add ();
add ();


console.log(count);
// varaiveis dentro de funcoes, semrpe seram priorizadas no 
// lugar das foras da funcao. ex: caso 'let count' estivesse
// dentro da function add a funcao nao funcionaria pois nao
// variaveis validas para executar o comando fora da funcao 