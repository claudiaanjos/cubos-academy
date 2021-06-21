function corrigirProva (prova) {
    let corretas = 0
    for (let i = 0; i < prova["questoes"].length; i++) {
        if (prova.questoes[i].resposta === prova.questoes[i].correta) {
         corretas++
        } 
    }
    let nota = (prova.valor / prova.questoes.length)*corretas
    return `O aluno(a) ${prova.aluno} acertou ${corretas} questões e obteve nota ${nota}.`
}


const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

let joao = corrigirProva(prova)
console.log(joao)