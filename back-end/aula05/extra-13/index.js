const nomeArquivo = 'Foto da Familia.pdf';

function validaArquivo (nomeArquivo) {
    if (nomeArquivo.includes("jpg") || nomeArquivo.includes("jpeg") || nomeArquivo.includes("gif") || nomeArquivo.includes("png")) {
        console.log("Arquivo válido")
    } else {
        console.log("Arquivo inválido")
    }
}

validaArquivo(nomeArquivo)