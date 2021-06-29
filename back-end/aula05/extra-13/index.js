const nomeArquivo = 'Foto da Familia.pdf';

function validaArquivo (nomeArquivo) {
    if (nomeArquivo.includes("jpg") || nomeArquivo.includes("jpeg") || nomeArquivo.includes("gif") || nomeArquivo.includes("png")) {
        console.log("Arquivo válido")
    } else {
        console.log("Arquivo inválido")
    }
}

validaArquivo(nomeArquivo)



// Outra Resolução

const nomeArquivo = 'Foto da Familia.png'

function validarArquivo(arquivo) {
    const arquivosValidos = ['jpg', 'jpeg', 'gif', 'png']
    const extensao = arquivo.substr(arquivo.lastIndexOf('.') + 1)

    if (arquivosValidos.includes(extensao)) {
        console.log('Arquivo válido!')
    } else {
        console.log('Arquivo inválido!')
    }
}

validarArquivo(nomeArquivo);