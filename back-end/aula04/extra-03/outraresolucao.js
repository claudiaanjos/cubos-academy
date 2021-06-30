// Outra resolução de todos os itens

// ITEM B

// objeto carrinho de exemplo do enunciado do exercício
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

// função imprimirResumoDoCarrinho
function imprimirResumoDoCarrinho(carrinho) {
    // variável qtdTotalItens para guardar o total de
    // itens de todos os produtos
    let qtdTotalItens = 0;

    // variável precoTotalItens para acumular o preco total
    // de todos os itens de todos os produtos
    let precoTotalItens = 0;

    // loop for..of para percorrer todos os produtos
    // calculando qdtTotalItens e precoTotalItens
    for (let produto of carrinho.produtos) {
        // acumula a quantidades de itens do produto na
        // variável qtoTotalItens
        qtdTotalItens += produto.qtd;

        // acumula o preco total de itens de todos os
        // produtos lembrando de multiplicar o preço unitário
        // pela quantidade de itens daquele produto
        precoTotalItens += produto.qtd * produto.precoUnit;
    }

    // variável precoTotalItensTexto para transformar
    // precoTotalItens em string, já convertendo centavos
    // para real (divisão por 100)
    let precoTotalItensTexto = `${precoTotalItens / 100}`;

    // transformando ponto em vírgula para o caso de o valor
    // ter dígitos diferente de zero nas casas decimais
    // se não tiver, nada será feito neste comando.
    precoTotalItensTexto = precoTotalItensTexto.replace(".", ",");

    // se não tiver a vírgula (e portanto as casas decimais),
    // adicionaremos ",00" ao fim da string
    if (precoTotalItensTexto.indexOf(",") === -1) {
        precoTotalItensTexto = `${precoTotalItensTexto},00`;
    }

    // abaixo serão impressas no console as linhas solicitadas
    // pelo exercício utilizando template de string, a propriedade
    // do nomeDoCliente e as variáveis calculadas nesta função
    console.log(`Cliente: ${carrinho.nomeDoCliente}`);
    console.log(`Total de itens: ${qtdTotalItens} itens`);
    console.log(`Total a pagar: R$ ${precoTotalItensTexto}`);
}

// execução da função imprimirResumoDoCarrinho
// passando como argumento o objeto carrinho de exemplo
imprimirResumoDoCarrinho(carrinho);


// ITEM C

// objeto carrinho de exemplo do enunciado do exercício
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

    // método imprimirResumo que é cópia da função
    // imprimirResumoDoCarrinho da letra b com uma alteração
    // que é a remoção do argumento carrinho cujas
    // propriedades deverão ser acessadas através do this.
    imprimirResumo: function () {
        let qtdTotalItens = 0
        let precoTotalItens = 0;
        for (let produto of this.produtos) {
            qtdTotalItens += produto.qtd;
            precoTotalItens += produto.qtd * produto.precoUnit;
        }
        let precoTotalItensTexto = `${precoTotalItens / 100}`;
        precoTotalItensTexto = precoTotalItensTexto.replace(".", ",");
        if (precoTotalItensTexto.indexOf(",") === -1) {
            precoTotalItensTexto = `${precoTotalItensTexto},00`;
        }

        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log(`Total de itens: ${qtdTotalItens} itens`);
        console.log(`Total a pagar: R$ ${precoTotalItensTexto}`);
    }
}

// execução do método imprimirResumo
carrinho.imprimirResumo();


// ITEM D

// objeto carrinho de exemplo do enunciado do exercício
// com alterações das letras anteriores
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

    imprimirResumo: function () {
        let qtdTotalItens = 0
        let precoTotalItens = 0;
        for (let produto of this.produtos) {
            qtdTotalItens += produto.qtd;
            precoTotalItens += produto.qtd * produto.precoUnit;
        }
        let precoTotalItensTexto = `${precoTotalItens / 100}`;
        precoTotalItensTexto = precoTotalItensTexto.replace(".", ",");
        if (precoTotalItensTexto.indexOf(",") === -1) {
            precoTotalItensTexto = `${precoTotalItensTexto},00`;
        }

        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log(`Total de itens: ${qtdTotalItens} itens`);
        console.log(`Total a pagar: R$ ${precoTotalItensTexto}`);
    }
}

// função addProdutoAoCarrinho com apenas dois argumentos
// carrinho e produto
function addProdutoAoCarrinho(carrinho, produto) {

}


// ITEM E

// objeto carrinho de exemplo do enunciado do exercício
// com alterações das letras anteriores
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

    imprimirResumo: function () {
        let qtdTotalItens = 0
        let precoTotalItens = 0;
        for (let produto of this.produtos) {
            qtdTotalItens += produto.qtd;
            precoTotalItens += produto.qtd * produto.precoUnit;
        }
        let precoTotalItensTexto = `${precoTotalItens / 100}`;
        precoTotalItensTexto = precoTotalItensTexto.replace(".", ",");
        if (precoTotalItensTexto.indexOf(",") === -1) {
            precoTotalItensTexto = `${precoTotalItensTexto},00`;
        }

        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log(`Total de itens: ${qtdTotalItens} itens`);
        console.log(`Total a pagar: R$ ${precoTotalItensTexto}`);
    }
}

// função addProdutoAoCarrinho
function addProdutoAoCarrinho(carrinho, produto) {
    // variável indiceProdutoExistente para guardar o
    // índice do produto encontrado no array
    let indiceProdutoExistente = -1;

    // loop for de c para percorrer o array produtos procurando
    // se o produto a ser adicionado já existe no carrinho
    for (let i = 0; i < carrinho.produtos.length; i++) {
        // SE o id do produto atual do array for igual
        // ao id do produto a ser adicionado
        if (carrinho.produtos[i].id === produto.id) {
            // encontrou o produto, guarda o índice na variável
            indiceProdutoExistente = i;
            // para de percorrer o array pois o produto foi encontrado
            break;
        }
    }

    // SE valor da variável é o valor inicial de antes do loop
    // (produto não foi encontrado)
    if (indiceProdutoExistente === -1) {
        // portanto adiciona o novo produto ao fim do array
        carrinho.produtos.push(produto);
        // SE não (se o produto foi encontrado no carrinho)
    } else {
        // adiciona qtd do argumento produto ao produto já existente
        carrinho.produtos[indiceProdutoExistente].qtd += produto.qtd;
    }
}

// objeto novaBermuda do exemplo do enunciado para testar o
// addProdutoAoCarrinho com produto JÁ existente
const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

// executa addProdutoAoCarrinho passando o carrinho e a novaBermuda
addProdutoAoCarrinho(carrinho, novaBermuda);

// executa imprimirResumo do carrinho para conferir se foi adicionado
carrinho.imprimirResumo();

// objeto novoTenis do exemplo do enunciado para testar o
// addProdutoAoCarrinho com produto NÃO existente
const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

// executa addProdutoAoCarrinho passando o carrinho e o novoTenis
addProdutoAoCarrinho(carrinho, novoTenis);

// executa imprimirResumo do carrinho para conferir se foi adicionado
carrinho.imprimirResumo();


// ITEM F

// objeto carrinho de exemplo do enunciado do exercício
// com alterações das letras anteriores
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

    imprimirResumo: function () {
        let qtdTotalItens = 0
        let precoTotalItens = 0;
        for (let produto of this.produtos) {
            qtdTotalItens += produto.qtd;
            precoTotalItens += produto.qtd * produto.precoUnit;
        }
        let precoTotalItensTexto = `${precoTotalItens / 100}`;
        precoTotalItensTexto = precoTotalItensTexto.replace(".", ",");
        if (precoTotalItensTexto.indexOf(",") === -1) {
            precoTotalItensTexto = `${precoTotalItensTexto},00`;
        }

        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log(`Total de itens: ${qtdTotalItens} itens`);
        console.log(`Total a pagar: R$ ${precoTotalItensTexto}`);
    },

    // método addProduto que é cópia da função addProdutoAoCarrinho
    // da letra e) com uma alteração que é a remoção do argumento
    // carrinho cujas propriedades deverão ser acessadas através do this.
    addProduto: function (produto) {
        let indiceProdutoExistente = -1;

        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].id === produto.id) {
                indiceProdutoExistente = i;
                break;
            }
        }

        if (indiceProdutoExistente === -1) {
            this.produtos.push(produto);
        } else {
            this.produtos[indiceProdutoExistente].qtd += produto.qtd;
        }
    }
}

// objeto novaBermuda do exemplo do enunciado para testar o
// addProdutoAoCarrinho com produto JÁ existente
const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

// executa addProduto para adicionar novaBermuda ao carrinho
carrinho.addProduto(novaBermuda);
// imprimirResumo do carrinho
carrinho.imprimirResumo();

// objeto novoTenis do exemplo do enunciado para testar o
// addProdutoAoCarrinho com produto NÃO existente
const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

// executa addProduto para adicionar novoTenis ao carrinho
carrinho.addProduto(novoTenis);
// imprimirResumo do carrinho
carrinho.imprimirResumo();


// ITEM G

// objeto carrinho de exemplo do enunciado do exercício
// com alterações das letras anteriores
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

    imprimirResumo: function () {
        let qtdTotalItens = 0
        let precoTotalItens = 0;
        for (let produto of this.produtos) {
            qtdTotalItens += produto.qtd;
            precoTotalItens += produto.qtd * produto.precoUnit;
        }
        let precoTotalItensTexto = `${precoTotalItens / 100}`;
        precoTotalItensTexto = precoTotalItensTexto.replace(".", ",");
        if (precoTotalItensTexto.indexOf(",") === -1) {
            precoTotalItensTexto = `${precoTotalItensTexto},00`;
        }

        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log(`Total de itens: ${qtdTotalItens} itens`);
        console.log(`Total a pagar: R$ ${precoTotalItensTexto}`);
    },

    addProduto: function (produto) {
        let indiceProdutoExistente = -1;

        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].id === produto.id) {
                indiceProdutoExistente = i;
                break;
            }
        }

        if (indiceProdutoExistente === -1) {
            this.produtos.push(produto);
        } else {
            this.produtos[indiceProdutoExistente].qtd += produto.qtd;
        }
    },

    // método imprimirDetalhes que é cópia da imprimirResumo
    // com algumas alterações
    imprimirDetalhes: function () {
        // começa imprimindo o nome do cliente
        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log(""); // imprime linha em branco após o nome

        let qtdTotalItens = 0
        let precoTotalItens = 0;
        // neste loop for..of que é usado para contar as quantidades
        // e para calcular o preço total de todos os itens de produtos
        // também será usado para imprimir as parciais por produto
        for (let i = 0; i < this.produtos.length; i++) {
            // variável para acessar mais facilmente o produto atual do loop
            let produto = this.produtos[i];

            qtdTotalItens += produto.qtd;
            // calcula preço por produto já convertendo centavos pra real
            let precoPorProduto = produto.qtd * produto.precoUnit / 100;
            precoTotalItens += precoPorProduto;

            // formata preço por produto
            let precoPorProdutoTexto = `${precoPorProduto}`;
            precoPorProdutoTexto = precoPorProdutoTexto.replace(".", ",");
            if (precoPorProdutoTexto.indexOf(",") === -1) {
                precoPorProdutoTexto = `${precoPorProdutoTexto},00`;
            }

            // imprime parcial por produto
            console.log(`Item ${i + 1} - ${produto.nome} - ${produto.qtd} und - R$ ${precoPorProdutoTexto}`)
        }

        console.log(""); // imprime linha em branco após as parciais por produto

        let precoTotalItensTexto = `${precoTotalItens}`;
        precoTotalItensTexto = precoTotalItensTexto.replace(".", ",");
        if (precoTotalItensTexto.indexOf(",") === -1) {
            precoTotalItensTexto = `${precoTotalItensTexto},00`;
        }

        // por fim imprime a quantidade total de itens e o total
        // a pagar por todos os produtos
        console.log(`Total de itens: ${qtdTotalItens} itens`);
        console.log(`Total a pagar: R$ ${precoTotalItensTexto}`);
    }
}

// executa método imprimirDetalhes do carrinho
carrinho.imprimirDetalhes();


// ITEM H

// objeto carrinho de exemplo do enunciado do exercício
// com alterações das letras anteriores
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

    // alterando método imprimirResumo para utilizar os novos
    // métodos calcularTotalDeItens e calcularTotalAPagar
    imprimirResumo: function () {
        // abaixo definimos as variáveis qtdTotalItens e
        // totalAPagar já atribuindo a elas o retorno dos
        // respectivos novos métodos
        let qtdTotalItens = this.calcularTotalDeItens();
        let totalAPagar = this.calcularTotalAPagar();

        let totalAPagarTexto = `${totalAPagar / 100}`;
        totalAPagarTexto = totalAPagarTexto.replace(".", ",");
        if (totalAPagarTexto.indexOf(",") === -1) {
            totalAPagarTexto = `${totalAPagarTexto},00`;
        }

        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log(`Total de itens: ${qtdTotalItens} itens`);
        console.log(`Total a pagar: R$ ${totalAPagarTexto}`);
    },

    addProduto: function (produto) {
        let indiceProdutoExistente = -1;

        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].id === produto.id) {
                indiceProdutoExistente = i;
                break;
            }
        }

        if (indiceProdutoExistente === -1) {
            this.produtos.push(produto);
        } else {
            this.produtos[indiceProdutoExistente].qtd += produto.qtd;
        }
    },

    // alterando método imprimirDetalhes com alterações para usar os
    // novos métodos calcularTotalDeItens e calcularTotalAPagar
    imprimirDetalhes: function () {
        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log("");

        // abaixo definimos as variáveis qtdTotalItens e
        // totalAPagar já atribuindo a elas o retorno dos
        // respectivos novos métodos
        let qtdTotalItens = this.calcularTotalDeItens();
        let totalAPagar = this.calcularTotalAPagar();

        for (let i = 0; i < this.produtos.length; i++) {
            let produto = this.produtos[i];

            let precoPorProduto = produto.qtd * produto.precoUnit / 100;

            let precoPorProdutoTexto = `${precoPorProduto}`;
            precoPorProdutoTexto = precoPorProdutoTexto.replace(".", ",");
            if (precoPorProdutoTexto.indexOf(",") === -1) {
                precoPorProdutoTexto = `${precoPorProdutoTexto},00`;
            }

            console.log(`Item ${i + 1} - ${produto.nome} - ${produto.qtd} und - R$ ${precoPorProdutoTexto}`)
        }

        console.log("");

        let totalAPagarTexto = `${totalAPagar / 100}`;
        totalAPagarTexto = totalAPagarTexto.replace(".", ",");
        if (totalAPagarTexto.indexOf(",") === -1) {
            totalAPagarTexto = `${totalAPagarTexto},00`;
        }

        console.log(`Total de itens: ${qtdTotalItens} itens`);
        console.log(`Total a pagar: R$ ${totalAPagarTexto}`);
    },

    // método calcularTotalDeItens para implementar apenas a
    // lógica de contar a quantidade total de itens de todos
    // os produtos
    calcularTotalDeItens: function () {
        let qtdTotalDeItens = 0;
        for (let produto of this.produtos) {
            qtdTotalDeItens += produto.qtd;
        }
        return qtdTotalDeItens;
    },

    // método calcularTotalAPagar para implementar apenas a
    // lógica de calcular o preço total de todos os itens
    // de todos os produtos
    calcularTotalAPagar: function () {
        let totalAPagar = 0;
        for (let produto of this.produtos) {
            totalAPagar += produto.qtd * produto.precoUnit;
        }
        return totalAPagar;
    }
}

// executa método imprimirResumo do carrinho
carrinho.imprimirResumo();

// executa método imprimirDetalhes do carrinho
carrinho.imprimirDetalhes();


// ITEM I

// objeto carrinho de exemplo do enunciado do exercício
// com alterações das letras anteriores
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

    imprimirResumo: function () {
        let qtdTotalItens = this.calcularTotalDeItens();
        let totalAPagar = this.calcularTotalAPagar();

        let totalAPagarTexto = `${totalAPagar / 100}`;
        totalAPagarTexto = totalAPagarTexto.replace(".", ",");
        if (totalAPagarTexto.indexOf(",") === -1) {
            totalAPagarTexto = `${totalAPagarTexto},00`;
        }

        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log(`Total de itens: ${qtdTotalItens} itens`);
        console.log(`Total a pagar: R$ ${totalAPagarTexto}`);
    },

    addProduto: function (produto) {
        let indiceProdutoExistente = -1;

        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].id === produto.id) {
                indiceProdutoExistente = i;
                break;
            }
        }

        if (indiceProdutoExistente === -1) {
            this.produtos.push(produto);
        } else {
            this.produtos[indiceProdutoExistente].qtd += produto.qtd;
        }
    },

    imprimirDetalhes: function () {
        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log("");

        let qtdTotalItens = this.calcularTotalDeItens();
        let totalAPagar = this.calcularTotalAPagar();

        for (let i = 0; i < this.produtos.length; i++) {
            let produto = this.produtos[i];

            let precoPorProduto = produto.qtd * produto.precoUnit / 100;

            let precoPorProdutoTexto = `${precoPorProduto}`;
            precoPorProdutoTexto = precoPorProdutoTexto.replace(".", ",");
            if (precoPorProdutoTexto.indexOf(",") === -1) {
                precoPorProdutoTexto = `${precoPorProdutoTexto},00`;
            }

            console.log(`Item ${i + 1} - ${produto.nome} - ${produto.qtd} und - R$ ${precoPorProdutoTexto}`)
        }

        console.log("");

        let totalAPagarTexto = `${totalAPagar / 100}`;
        totalAPagarTexto = totalAPagarTexto.replace(".", ",");
        if (totalAPagarTexto.indexOf(",") === -1) {
            totalAPagarTexto = `${totalAPagarTexto},00`;
        }

        console.log(`Total de itens: ${qtdTotalItens} itens`);
        console.log(`Total a pagar: R$ ${totalAPagarTexto}`);
    },

    calcularTotalDeItens: function () {
        let qtdTotalDeItens = 0;
        for (let produto of this.produtos) {
            qtdTotalDeItens += produto.qtd;
        }
        return qtdTotalDeItens;
    },

    calcularTotalAPagar: function () {
        let totalAPagar = 0;
        for (let produto of this.produtos) {
            totalAPagar += produto.qtd * produto.precoUnit;
        }
        return totalAPagar;
    },

    // método calcularDesconto
    calcularDesconto: function () {
        // variáveis para guardar os retornos dos métodos
        // calcularTotalDeItens e calcularTotalAPagar
        let qtdTotalDeItens = this.calcularTotalDeItens();
        let totalAPagar = this.calcularTotalAPagar();

        // variáveis para guardar os cálculos de desconto
        // por cada uma das duas regras
        let descontoPorItens = 0;
        let descontoPorTotal = 0;

        // lógica para calcular o desconto pela regra de
        // quantidade de itens (se qtd de itens maior que 4)
        // onde o desconto será o valor do produto mais barato
        if (qtdTotalDeItens > 4) {
            // guarda preço do primeiro produto
            descontoPorItens = this.produtos[0].precoUnit;
            // percorre array de produtos procurando produto mais barato
            for (let i = 1; i < this.produtos.length; i++) {
                // se item atual do loop é mais barato do que o valor em descontoPorItens
                if (this.produtos[i].precoUnit < descontoPorItens) {
                    // guarda valor do mais barato
                    descontoPorItens = this.produtos[i].precoUnit;
                }
            }
        }

        // lógica para desconto percentual sobre valor total
        // (se totalAPagar é maior que 100)
        if (totalAPagar > 100) {
            // descontoPorTotal será 10% (valor dividido por 10)
            descontoPorTotal = totalAPagar / 10;
        }

        // retorna o maior valor de desconto (mais vantajoso) entre os
        // dois descontos calculados, utilizando o operador ternário para
        // a decisão
        return descontoPorItens > descontoPorTotal ? descontoPorItens : descontoPorTotal;
    }
}

// abaixo realizaremos o teste do calcularDesconto para os itens / produtos
// do carrinho original

// executa calcularDesconto e guarda na variável descontoEmCentavos
let descontoEmCentavos = carrinho.calcularDesconto();

// formata valor do desconto em texto
let descontoEmReaisTexto = `${descontoEmCentavos / 100}`;
descontoEmReaisTexto = descontoEmReaisTexto.replace(".", ",");
if (descontoEmReaisTexto.indexOf(",") === -1) {
    descontoEmReaisTexto = `R$ ${descontoEmReaisTexto},00`;
}

// imprime o valor do desconto
console.log(`Desconto para o carrinho da letra b): ${descontoEmReaisTexto}`);

// -------------------------------------------------------- //

// abaixo serão adicionados os itens / produtos que foram adicionados
// na letra e)

// adiciona os produtos
const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}
carrinho.addProduto(novaBermuda);
const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}
carrinho.addProduto(novoTenis);

// executa calcularDesconto e guarda na variável descontoEmCentavos
descontoEmCentavos = carrinho.calcularDesconto();

// formata valor do desconto em texto
descontoEmReaisTexto = `${descontoEmCentavos / 100}`;
descontoEmReaisTexto = descontoEmReaisTexto.replace(".", ",");
if (descontoEmReaisTexto.indexOf(",") === -1) {
    descontoEmReaisTexto = `R$ ${descontoEmReaisTexto},00`;
}

// imprime o valor do desconto
console.log(`Desconto para o carrinho da letra e): ${descontoEmReaisTexto}`);