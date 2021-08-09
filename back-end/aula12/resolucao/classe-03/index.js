
function taAberto(momentoClienteChegou) {
    const abertura = new Date(+momentoClienteChegou);
    const fechamento = new Date(+momentoClienteChegou);

    abertura.setHours(8,0,0,0);
    fechamento.setHours(18,0,0,0);

    return +momentoClienteChegou >= +abertura &&
           +momentoClienteChegou <= +fechamento;
}

console.log(taAberto(new Date(2015,1,1,12)));
console.log(taAberto(new Date(2015,1,1,2)));

console.log(taAberto(new Date(2017,3,21,8,0,0,0)));
console.log(taAberto(new Date(2018,5,15,18,0,0,0)));