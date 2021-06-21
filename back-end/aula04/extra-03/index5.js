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
    ],

    calcularTotalDeItens: function () {
        let somaDosItens = 0
        for (let totalDeItens of this.produtos) {
            somaDosItens += totalDeItens.qtd
        } return somaDosItens
    },

    calcularTotalAPagar: function () {
        let valor = 0
        let total = 0
        for (let i = 0; i < carrinho.produtos.length; i++) {
            valor = carrinho.produtos[i].precoUnit * carrinho.produtos[i].qtd
            total = total + valor
        } return (total/100).toFixed(2)
    },

    imprimirResumo: function () {
        return `Cliente: ${carrinho.nomeDoCliente} \nTotal de itens: ${this.calcularTotalDeItens()} itens \nTotal a pagar: R$ ${this.calcularTotalAPagar()} `
    },

    addProduto: function (produto) {
        let existe = false
        let idIgual = 0
        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].id === produto.id) {
                existe = true
                idIgual = i
            }
        }
        if (existe) {
            return this.produtos[idIgual].qtd += produto.qtd
        }
        else {
            return this.produtos.push(produto)
        }
    },

    imprimirDetalhes: function () {
        console.log(`Cliente: ${carrinho.nomeDoCliente}`)

        let valorItem = 0
        for (let item of this.produtos) {
            valorItem = item.precoUnit * item.qtd
            console.log(`Item ${item.id} - ${item.nome} - ${item.qtd} und - R$ ${(valorItem / 100).toFixed(2)}`)
        }

        console.log(`Total de itens: ${this.calcularTotalDeItens()} itens \nTotal a pagar: R$ ${this.calcularTotalAPagar()}`)

    }
}

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

carrinho.addProduto(novaBermuda)

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

carrinho.addProduto(novoTenis)
console.log(carrinho.imprimirDetalhes())