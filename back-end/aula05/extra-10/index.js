const cpf = "011.022.033-44";

function novoNumero (cpf){
    let resultado = cpf
    let resultadoAnterior = ""
    while (resultado !== resultadoAnterior) {
        resultadoAnterior = resultado
        resultado = resultado.replace(".", "")
        resultado = resultado.replace("-", "")
    }
    return resultado
}

console.log(novoNumero(cpf))


// Outra Resolução

const cpf = "011.022.033-44"

function removerPontuacao(numero) {
    console.log(numero.replace('-', '').split('.').join(''))
}

removerPontuacao(cpf)