const express = require("express");
const controladores = require("./controladores/imoveis");
const roteador = express();

roteador.get("/imoveis", controladores.consultarTodosImoveis);
roteador.get("/imoveis/:idConsultado", controladores.consultarImovel);

module.exports = roteador;