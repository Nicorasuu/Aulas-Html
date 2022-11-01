/* let carro1 = 'Palio';
let carro2 = 'Uno';
let carro3 = 'Corolla';
let carro4 = 'Ferrari';
*/

//let ingredientes = [['uva', 'pera', 'maca'], ['arroz', 'macarrao']] ;

let carros =  [
    {nome: 'Fiat', modelo: 'Palio'}, 
    {nome: 'Fiat', modelo: 'Uno'}, 
    {nome: 'Toyota', modelo: 'Corolla'}, 
    {nome: 'Ferrari', modelo: 'Spider'}];

let carro = {
    nome: 'Fiat',
    modelo: 'Uno',
    peso: '800kg',
    ligar: function () {
        this.ligado = true;
        console.log("VRUM VRUM!!");
    },
    acelerar: function(){
        if(this.ligado == true){
            console.log("Taaaan taaaaan tanaaaaaannnn!");
        } else{
            console.log(this.nome+" "+this.modelo+" nao esta ligado chefe!");
        }
    }
}


console.log(carros[1].nome);

console.log('Modelo: ' + carro.modelo);
carro.ligar();
carro.acelerar();