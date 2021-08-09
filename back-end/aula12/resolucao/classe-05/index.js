
function taAberto(momentoClienteChegou) {
    const abertura = new Date(+momentoClienteChegou);
    const fechamento = new Date(+momentoClienteChegou);

    abertura.setHours(8,0,0,0);

    if (momentoClienteChegou.getDay() === 6)
        fechamento.setHours(12,0,0,0);

    return +momentoClienteChegou >= +abertura &&
           +momentoClienteChegou <= +fechamento &&
           momentoClienteChegou.getDay() >= 1 &&
           momentoClienteChegou.getDay() <= 6;
}

console.log(taAberto(new Date(2021,3,25,12))); // domingo 12hs
console.log(taAberto(new Date(2021,3,26,12))); // segunda 12hs
console.log(taAberto(new Date(2021,3,26,7,59))); // antes das 8hs
console.log(taAberto(new Date(2021,3,24,9,30))); // sábado 9h30
