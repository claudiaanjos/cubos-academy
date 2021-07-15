//valor do produto comprado.
const valorDoProduto = 1000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;


if (quantidadeDoParcelamento !== 0 || valorDoProduto !== valorPago){
    let parcelasPagas = valorPago / (valorDoProduto / quantidadeDoParcelamento) 
    let parcelas = quantidadeDoParcelamento - parcelasPagas
    let valorRestante = (valorDoProduto - valorPago) / parcelas
    console.log(` Restam ${parcelas} parcelas de R$ ${(valorRestante).toFixed(2)}`)
} else {
    console.log("Não tem mais parcelas.")
}

