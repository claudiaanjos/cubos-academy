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


// Outra Resolução

const cpf = "12345678900";
const cnpj = "12345678900";

function validaCpf(cpf) {
    if (cpf.length != 11) {
        console.log('CPF inválido');
    } else {
        const cpfFormatado = `${cpf.substr(0, 3)}.${cpf.substr(3, 3)}.${cpf.substr(6, 3)}-${cpf.substr(9, 2)}`;

        console.log(cpfFormatado);
    }
}

validaCpf(cpf);

function validaCnpj(cnpj) {
    if (cnpj.length != 14) {
        console.log('CNPJ inválido');
    } else {
        const cnpjFormatado = `${cnpj.substr(0, 2)}.${cnpj.substr(2, 3)}.${cnpj.substr(5, 3)}/${cnpj.substr(8, 4)}-${cnpj.substr(12, 2)}`;

        console.log(cnpjFormatado);
    }
}

validaCnpj(cnpj);




