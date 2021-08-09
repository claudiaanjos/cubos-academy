//getDay => O valor retornado por getDay() é um inteiro que corresponde com o dia da semana: 0 para Domingo, 1 para Segunda-Feira, 2 para Terça-Feira, e assim por diante.

function taAberto(chegada) {
    const abertura = new Date(chegada);
    const fechamento = new Date(chegada);

    abertura.setHours(8);
    fechamento.setHours(18);

    const diasUteis = chegada.getDay() >= 1 && chegada.getDay() <= 5;

    if (+chegada >= +abertura && +chegada <= +fechamento && diasUteis) {
        return true;
    } else {
        return false;
    }
}


console.log(taAberto(new Date(2021, 3, 25, 12)));
console.log(taAberto(new Date(2021, 3, 26, 12)));
console.log(taAberto(new Date(2021, 3, 26, 7, 59)));
