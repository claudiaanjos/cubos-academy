const numeros = [0, 122, 4, 6, 7, 8, 44];

let validacao = numeros.every(numero => numero % 2 === 0)
validacao = validacao === true ? `array válido` : `array inválido`

console.log(validacao)