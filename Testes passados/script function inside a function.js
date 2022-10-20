/* function square(x) {
    return x * x;
} se essa funcao estiver fora tbm funciona, mas o ideal eh juntar as 2*/

function addSquares(a, b) {
    /* function square(x) {
        return x * x;
    } esse eh um jeito de fazer mas fica mais correto se usar arrow function*/

    const square = (x) => x * x;

    let sqrA = square(a);
    let sqrB = square (b);
    return sqrA + sqrB;
}

console.log (addSquares(2, 3));