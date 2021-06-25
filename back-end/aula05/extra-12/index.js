const nome = 'Guido Cerqueira';

function gerarNickname (nome) {
    let novoNome = nome.split(" ")
    novoNome.splice(0, 0, "@")
    novoNome = novoNome.join("").toLocaleLowerCase().slice(0, 13)
    console.log(novoNome)
}

gerarNickname(nome)