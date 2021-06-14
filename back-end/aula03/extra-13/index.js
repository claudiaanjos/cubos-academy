//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;


if (tipoDePagamento === "credito"){
    let descontoCredito = valorDoProduto - (valorDoProduto * 0.05)
    console.log(`Valor a ser pago R$ ${(descontoCredito/100).toFixed(2)}`)
} else if (tipoDePagamento === "cheque"){
    let descontoCheque = valorDoProduto - (valorDoProduto * 0.03)
    console.log(`Valor a ser pago R$ ${(descontoCheque/100).toFixed(2)}`)
} else if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro"){
    let descontoDebitoDinheiro = valorDoProduto - (valorDoProduto * 0.1)
    console.log(`Valor a ser pago R$ ${(descontoDebitoDinheiro/100).toFixed(2)}`)
} else {
    console.log(`Escolha uma forma de pagamento válida`)
}
