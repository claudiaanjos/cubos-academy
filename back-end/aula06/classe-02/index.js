const endereços = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
]

// const cepEncotrado = endereços.find((x) => {
//     if (x.cep === 00222444) {
//         return true
//     } else {
//         return false
//     }
// })

const cepEncotrado = endereços.find(x => x.cep === 00222444)

console.log(cepEncotrado.rua)


// Outra Resolução

function buscarEndereco(cep) {
    const enderecos = [
        { cep: 00111222, rua: "Rua dos Artistas" },
        { cep: 00111333, rua: "Rua Augusta" },
        { cep: 00222444, rua: "Avenida Paralela" },
        { cep: 11222333, rua: "Rua Carlos Gomes" },
    ];

    const enderecoEncontrado = enderecos.find(function (valor) {
        return valor.cep == cep;
    });

    console.log(enderecoEncontrado.rua);
}

buscarEndereco(00222444);