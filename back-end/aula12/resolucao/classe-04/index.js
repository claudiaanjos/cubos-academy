
function taAberto(momentoClienteChegou) {
    const abertura = new Date(+momentoClienteChegou);
    const fechamento = new Date(+momentoClienteChegou);

    abertura.setHours(8,0,0,0);
    fechamento.setHours(18,0,0,0);

    return +momentoClienteChegou >= +abertura &&
           +momentoClienteChegou <= +fechamento &&
           momentoClienteChegou.getDay() >= 1 &&
           momentoClienteChegou.getDay() <= 5;
}

console.log(taAberto(new Date(2021,3,25,12))); // domingo
console.log(taAberto(new Date(2021,3,26,12))); // segunda
console.log(taAberto(new Date(2021,3,26,7,59))); //muito cedo

console.log(taAberto(new Date(2017,3,21,8,0,0,0)));
console.log(taAberto(new Date(2018,5,15,18,0,0,0)));