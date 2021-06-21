function imprimirResumoDoCarrinho (carrinho) {
    let valor = 0
    let quantidade = 0
    let total = 0
    for (let i = 0; i < carrinho.produtos.length; i++) {
        quantidade += carrinho.produtos[i].qtd
        valor = carrinho.produtos[i].precoUnit * carrinho.produtos[i].qtd
        total = total + valor
    }
    return `Cliente: ${carrinho.nomeDoCliente} \nTotal de itens: ${quantidade} itens \nTotal a pagar: R$ ${(total/100).toFixed(2)} `
}


const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ]
}

console.log(imprimirResumoDoCarrinho(carrinho))