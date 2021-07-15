//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;

if (rendaMensalEmCentavos > (2000 * 100) && mesesDecorridos < 60){
    let parcela = ((rendaMensalEmCentavos/100) * 18)/100
    console.log(`O valor da parcela desse mês é R$ ${parcela} reais`)  
} else if (rendaMensalEmCentavos < (2000 * 100)) {
    console.log(`O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.`)
} else if (mesesDecorridos > 60){
    console.log(`Você não deve nada, pois já passaram 60 meses`)
} else if (totalJaPagoPeloAluno === (18000 * 100)){
    console.log(`Você não deve nada, pois já pagou o total do curso de R$ 18.000 reais.`)
}
