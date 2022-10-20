/* let fruits = ['Maca', 'Uva', 'Laranja', 'Banana'];

fruits.sort(); //ordena em ordem alfabetica como default
fruits.reverse() //inverte a ordem, se usado depois do sort inverte a ordem alfabetica


console.log(fruits); */

let cars = [
    {brand: 'Fiat', year: 2022},
    {brand: 'BMW', year: 2018},
    {brand: 'Ferrari', year: 2020}
]

cars.sort((a, b) => { return a.year - b.year;}); //forma mais facil de fazer 
    /* if (a.year > b.year) {
        return 1;
    } else if (a.year < b.year) {
        return -1;
    } else {
        return 0;
    }  
})     jeito de fazer com if/else    */
    
console.log(cars);