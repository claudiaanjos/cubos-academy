const comentario = "Esse COVID é muito perigoso!";

function verificarTexto (mensagem) {
    let texto = mensagem.toUpperCase()
    if (texto.includes("COVID") || texto.includes("PANDEMIA")) {
        return `Comentário bloqueado por conter palavras proibidas.`
    } else {
        return `Comentário autorizado.`
    }
}

console.log(verificarTexto(comentario))


// Outra Resolução

const comentario = "Esse COVID é muito perigoso!";

const achouCovid = comentario.toLowerCase().includes('covid');

const achouPandemia = comentario.toLowerCase().includes('pandemia');

if (achouCovid || achouPandemia) {
    console.log("Comentário bloqueado por conter palavras proibidas");
} else {
    console.log("Comentário autorizado");
}