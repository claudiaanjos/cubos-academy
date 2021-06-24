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