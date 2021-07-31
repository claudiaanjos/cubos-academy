const express = require("express");
const controladores = require("./controladores/recurso");

const roteador = express();

roteador.get ("/alunos", controladores.consultarTodosAlunos);
roteador.get("/aluno/:idConsultado", controladores.consultarAluno);


module.exports = roteador;