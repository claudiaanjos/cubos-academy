const alunos = require('../dados/alunos');

let idProximoAlunoCriado = 1;

function obterAlunos(req, res) {
    res.json(alunos);
}

function obterAlunoPeloId(req, res) {
    const idRequisitado = Number(req.params.id);

    if (isNaN(idRequisitado)) {
        res.status(400).json({ mensagem: "O id informado não é um número válido." });
        return;
    }

    const aluno = alunos.find(x => x.id === idRequisitado);

    if (!aluno) {
        res.status(404).json({ mensagem: "Aluno não encontrado." })
    }
    else {
        res.json(aluno);
    }
}

function adicionarAluno(req, res) {
    let novoAluno = req.body;

    if (!novoAluno) { 
        res.status(400).json({ mensagem: "Um objeto representando o aluno deve ser enviado no corpo da requisição." });
        return;
    }

    if (!novoAluno.nome.trim()) {
        res.status(400).json({ mensagem: "O nome deve ser informado." });
        return;
    }

    if (!novoAluno.sobrenome.trim()) {
        res.status(400).json({ mensagem: "O sobrenome deve ser informado." });
        return;
    }

    if (!novoAluno.idade) {
        res.status(400).json({ mensagem: "A idade deve ser informada." });
        return;
    }

    if (!novoAluno.curso.trim()) {
        res.status(400).json({ mensagem: "O curso deve ser informado." });
        return;
    }

    if (novoAluno.idade < 18) {
        res.status(400).json({ mensagem: "O aluno a ser adicionado deve ter pelo menos 18 anos." });
        return;
    }

    novoAluno = {
        id: idProximoAlunoCriado,
        nome: novoAluno.nome,
        sobrenome: novoAluno.sobrenome,
        idade: novoAluno.idade,
        curso: novoAluno.curso
    }

    idProximoAlunoCriado++;

    alunos.push(novoAluno);

    res.status(201).send();
}

function excluirAluno(req, res) {
    const idAlunoExclusao = Number(req.params.id);

    if (isNaN(idAlunoExclusao)) {
        res.status(400).json({ mensagem: "O id informado não é um número válido." });
        return;
    }

    const indiceAlunoExclusao = alunos.findIndex(x => x.id === idAlunoExclusao);
    let alunoExcluido;

    if (indiceAlunoExclusao < 0) {
        res.status(404).json({ mensagem: "Aluno a ser excluído não encontrado." })
    }
    else {
        alunoExcluido = alunos.splice(indiceAlunoExclusao, 1)[0];
    }

    res.json(alunoExcluido);
}

module.exports = {obterAlunos, obterAlunoPeloId, adicionarAluno, excluirAluno};