const nomes = ['Juninho', 'Léo', 'Guido', 'Dina', 'Vitinho', 'Nanda'];
const tamanhoDoGrupo = 4;

function dividirGrupos (nomes, tamanhoDoGrupo){
    let grupo1 = nomes.slice(0, tamanhoDoGrupo)
    let grupo2 = nomes.slice(tamanhoDoGrupo, nomes.length)
    return `Grupo 1: ${grupo1.join(", ")}. \nGrupo 2: ${grupo2.join(", ")}.`
}

console.log(dividirGrupos(nomes, tamanhoDoGrupo))


// Outra Resolução

const nomes = ['Juninho', 'Léo', 'Guido', 'Dina', 'Vitinho', 'Nanda']
const tamanhoDoGrupo = 4

function separaGrupo(lista, tamanho) {
    const resultado = []

    var numeroGrupo = 1
    for (var i = 0; i < lista.length; i = i + tamanho) {
        console.log(`Grupo ${numeroGrupo}: ${lista.slice(i, (i + tamanho)).join(', ')}`)
        numeroGrupo++
    }
}

separaGrupo(nomes, tamanhoDoGrupo)