const texto = "Aprenda programar do zero na Cubos Academy";

function transformarURL (texto) {
    let resultado = texto
    let resultadoAnterior = ""
    while (resultado !== resultadoAnterior) {
        resultadoAnterior = resultado
        resultado = resultado.replace(" ", "-")
    }
    return resultado.toLowerCase()
}

console.log(transformarURL(texto))






