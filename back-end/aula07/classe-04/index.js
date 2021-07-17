const palavras = ['livro', 'caneta', 'sol', 'carro', 'orelha'];

let validacao = palavras.some(item => item.length > 5) === true ? `existe palavra inválida` : `array validado`

console.log(validacao)


// Outra Resolução

const palavras = ['livro', 'caneta', 'sol', 'carro', 'orelha'];

const existePalavraInvalida = palavras.some(function (valor) {
    return valor.length > 5;
});

if (existePalavraInvalida) {
    console.log('existe palavra inválida');
} else {
    console.log('array validado');
}