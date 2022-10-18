function calcularImovel (metragem, quartos){
    let m2 = 3000;
    let preco = 0;

    switch (quartos) {
        case 1:
        default:    
            preco = metragem * m2;
            break;
        case 2:
            preco = metragem * (m2 * 1.2); 
            break;
        case 3:
            preco= metragem * (m2 * 1.5);
            break;
    }

    return preco;
    /*
    if (quartos = 1) {console.log (`A casa custa R$ ${m2}`)}
    else if (quartos = 2) {console.log (`A casa custa R$ ${m2 *  1.2}`)}
    else if (quartos = 3) */
}

let metragem = 123;
let quartos = 3;
let preco = calcularImovel (metragem, quartos);
  console.log(`A casa custa R$ ${preco}`);