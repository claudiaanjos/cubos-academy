function calculo (lados){
    let soma = (lados - 2) * 180
    return soma
}

let lados = 6
let angulo = calculo(lados) / lados
console.log(angulo)
