const palavras = ['livro', 'caneta', 'sol', 'carro', 'orelha'];

let validacao = palavras.some(item => item.length > 5)

validacao = validacao === true ? `existe palavra inválida` : `array validado`

console.log(validacao)
