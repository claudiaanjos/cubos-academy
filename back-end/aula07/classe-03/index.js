const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

let maiorValor = numeros.reduce((acc, item) => acc === Math.floor(acc) && acc > item ? acc : item)


console.log(maiorValor)



// Outra Resolução

const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const maiorNumero = numeros.reduce(function (acumulador, atual) {
    return Math.max(acumulador, atual);
});

console.log(maiorNumero);