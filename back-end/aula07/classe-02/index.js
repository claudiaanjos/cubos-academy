const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];


let maiorString = cidades.reduce((acc, item) => item.length > acc.length ? item : acc)


console.log(maiorString)


// Outra Resolução

const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];

const maiorString = cidades.reduce(function (acumulador, atual) {
    return atual.length > acumulador.length ? atual : acumulador;
});

console.log(maiorString);