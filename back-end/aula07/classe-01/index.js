const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

// ITEM A

numeros.sort((a, b) => a - b)
console.log(numeros)

// ITEM B

numeros.sort((a, b) => b - a)
console.log(numeros)

// ITEM C

numeros.sort()
console.log(numeros)

// ITEM D

frutas.sort((a, b) => a.localeCompare(b))
console.log(frutas)

// ITEM E

frutas.sort((a, b) => b.localeCompare(a))
console.log(frutas)

// ITEM F

frutas.sort((a, b) => a.length - b.length)
console.log(frutas)
