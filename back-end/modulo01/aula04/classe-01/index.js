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



// Outra Resolução

// função corrigirProva que recebe prova como argumento 
function corrigirProva(prova) {
    // variável questoesCorretas para contar quantas
    // questoes corretas existem na prova
    let questoesCorretas = 0;

    // loop for..of para percorrer todas as questoes da
    // prova e verificar quais estão corretas para contá-las
    for (let questao of prova.questoes) {
        // SE a resposta da questao é igual a resposta correta
        if (questao.resposta === questao.correta) {
            // conta mais uma questão correta na variável questoesCorretas
            questoesCorretas++;
        }
    }

    // variável valorPorQuestao para definir o valor de cada questão
    // dividindo o valor total da prova pela quantidade de questões
    let valorPorQuestao = prova.valor / prova.questoes.length;

    // variável notaDaProva para definir a nota recebida por esta prova
    // multiplicando a quantidade de questões corretas pelo valorPorQuestao
    let notaDaProva = valorPorQuestao * questoesCorretas;

    // IF..ELSE IF..ELSE para customizar e imprimir mensagens (singular /
    // plural) dependendo da quantidade de questões respondidas corretamente
    if (questoesCorretas === 0) {
        console.log(`${prova.aluno} não acertou qualquer questão e obteve nota 0`);
    } else if (questoesCorretas === 1) {
        console.log(`O aluno(a) ${prova.aluno} acertou 1 questão e obteve nota ${notaDaProva}`);
    } else {
        console.log(`O aluno(a) ${prova.aluno} acertou ${questoesCorretas} questões e obteve nota ${notaDaProva}`);
    }
}

// execução da função corrigirProva passando o objeto prova como argumento
corrigirProva(prova);