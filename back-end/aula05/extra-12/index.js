const nome = 'Guido Cerqueira';

function gerarNickname (nome) {
    let novoNome = nome.split(" ")
    novoNome.splice(0, 0, "@")
    novoNome = novoNome.join("").toLocaleLowerCase().slice(0, 13)
    console.log(novoNome)
}

gerarNickname(nome)


// Outra Resolução

const nome = "Anderson Oliveira"

function gerarNickname(nome) {
    const nickname = nome.trim().toLowerCase().substr(0, 13).split(' ').join('')
    console.log(`@${nickname}`)
}

gerarNickname(nome)