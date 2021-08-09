function taAberto (chegada) {
    const abertura = new Date (+chegada);
    const fechamento = new Date (+chegada);

    abertura.setHours(8);
    fechamento.setHours(18);

    if (+chegada >= +abertura && +chegada <= +fechamento) {
        return true;
    } else {
        return false;
    }
}

console.log(taAberto(new Date(2015, 1, 1, 12)));
console.log(taAberto(new Date(2015, 1, 1, 2)));

console.log(taAberto(new Date(2017, 3, 21, 8, 0, 0, 0)));
console.log(taAberto(new Date(2018, 5, 15, 18, 0, 0, 0)));
