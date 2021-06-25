const nomes = ['Juninho', 'Léo', 'Guido', 'Dina', 'Vitinho', 'Nanda'];
const tamanhoDoGrupo = 4;

function dividirGrupos (nomes, tamanhoDoGrupo){
    let grupo1 = nomes.slice(0, tamanhoDoGrupo)
    let grupo2 = nomes.slice(tamanhoDoGrupo, nomes.length)
    return `Grupo 1: ${grupo1.join(", ")}. \nGrupo 2: ${grupo2.join(", ")}.`
}

console.log(dividirGrupos(nomes, tamanhoDoGrupo))