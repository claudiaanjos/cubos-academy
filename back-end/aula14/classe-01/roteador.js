const express = require('express');
const { obterEmpresa } = require('./controladores/empresas');

const roteador = express();

roteador.get('/empresas/:dominio', obterEmpresa);

module.exports = roteador;