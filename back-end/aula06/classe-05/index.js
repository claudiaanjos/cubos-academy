const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44]

const numerosPares = numeros.filter(x => x%2 === 0)

console.log(numerosPares)


// Outra Resolução

const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const numerosPares = numeros.filter(function (valor) {
    return valor % 2 === 0;
});

console.log(numerosPares);