const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

let lista = palavras.some(item => item === "cerveja" || item === "vodka") === true ? `Revise sua lista, João. Possui bebida com venda proibida!` : `Tudo certo, vamos as compras!`

console.log(lista)
