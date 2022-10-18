
function calcPct (x, y) {
    let pct = (y/x) * 100; 
    return pct;

    // outra forma: return (y/x) * 100;
}
let x = 40;
let y = 10;
let pct = calcPct(x, y);


console.log(`${pct}% de ${x} eh ${y}`);
