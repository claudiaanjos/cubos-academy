const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

// item a
console.log(frutas.reverse().join(", "))

// item b
frutas.reverse().splice(-1, 1, "Melão")
console.log(frutas.slice(1, 5))