const nomes = ['Maria', 'João', 'José', 'Antonio', 'Beatriz', 'Camila', 'amanda']

const nomesComA = nomes.filter(x => x[0] === 'a' || x[0] === 'A')

console.log(nomesComA)


// Outra Resolução

const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
];

const novoArray = nomes.filter(function (valor) {
    return valor.substr(0, 1).toLowerCase() == 'a';
});

console.log(novoArray);