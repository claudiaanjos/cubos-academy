const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

// item a
console.log(frutas.reverse().join(", "))

// item b
frutas.reverse().splice(-1, 1, "Melão")
console.log(frutas.slice(1, 5))


// Outra Resolução

const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

const arrayInverso = frutas.reverse().join(', ');
console.log(arrayInverso);

//reverte para voltar ao array original
frutas.reverse();

//remove primeiro
frutas.shift();

//remove ultimo
frutas.pop();

//adiciona melão
frutas.push('Melão');
console.log(frutas);