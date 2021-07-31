const express = require("express");
const {obterAlunos, obterAlunoPeloId, adicionarAluno, excluirAluno} = require("./controladores/alunos");

const roteador = express();

roteador.get("/alunos", obterAlunos);
roteador.get("/alunos/:id", obterAlunoPeloId);
roteador.post("/alunos", adicionarAluno);
roteador.delete("/alunos/:id", excluirAluno);

module.exports = roteador;