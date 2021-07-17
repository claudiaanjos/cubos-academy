const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function encontrarCarro (nomes, posicao) {
    let carrosEscolhidos = nomes.slice(posicao, (posicao + 3))
    console.log(carrosEscolhidos.join(" - "))
}

encontrarCarro(nomes, posicao)

// Outra Resolução

const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia']
const posicao = 2

function grupoDeCarros(arrayCarros, posicaoInicial) {
    console.log(arrayCarros.splice(posicaoInicial, 3))
}

grupoDeCarros(nomes, posicao)