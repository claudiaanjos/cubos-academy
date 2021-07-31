const alunos = require("../dados/colecao");

function consultarTodosAlunos (req, res) {
    res.json(alunos);
    
}

function consultarAluno (req, res) {
    const aluno = alunos.find(aluno => aluno.id === Number(req.params.idConsultado));

    res.json(aluno);
}


module.exports = { consultarTodosAlunos, consultarAluno };