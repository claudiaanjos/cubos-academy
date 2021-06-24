const cpf = "12345678900";
const cnpj = "12345678000199";

function validarCPF (numero) {
    let novoCPF = cpf.split("")
    if (numero.length === 11) {
        novoCPF.splice(-2, 0, "-")
        novoCPF.splice(3, 0, ".")
        novoCPF.splice(7,0,".")
        return novoCPF.join("")
    } else {
        return `CPF Inválido.`
    }
}

function validarCNPJ (numero) {
    if (numero.length === 14) {
        return `${numero.slice(0, 2)}.${numero.slice(2, 5)}.${numero.slice(5, 8)}/${numero.slice(8, 12)}-${numero.slice(12, -1)}`
    } else {
        return `CNPJ Inválido.`
    }
}

console.log(validarCPF(cpf))
console.log(validarCNPJ(cnpj))




