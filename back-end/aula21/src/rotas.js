const express = require('express');
const { login } = require('./controladores/login');
const { cadastrarPostagem, atualizarPostagem } = require('./controladores/postagens');
const { cadastrarUsuario } = require('./controladores/usuarios');

const rotas = express();

rotas.post('/usuarios', cadastrarUsuario);

rotas.post('/login', login);

rotas.post('/postagens', cadastrarPostagem);
rotas.patch('/postagens/:id', atualizarPostagem);

module.exports = rotas;