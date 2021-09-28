const express = require('express');
const { login } = require('./controladores/login');
const { cadastrarPostagem, atualizarPostagem, excluirPostagem, todasPostagens, postagensUsuario } = require('./controladores/postagens');
const { cadastrarUsuario } = require('./controladores/usuarios');
const verificaLogin = require('./filtros/verificaLogin');


const rotas = express();


rotas.post('/usuarios', cadastrarUsuario);

rotas.post('/login', login);

rotas.get('/', todasPostagens);

rotas.use(verificaLogin);

rotas.post('/postagens', cadastrarPostagem);
rotas.patch('/postagens/:id', atualizarPostagem);

rotas.get('/postagens', postagensUsuario);

rotas.delete('/postagem/:id', excluirPostagem);

module.exports = rotas;