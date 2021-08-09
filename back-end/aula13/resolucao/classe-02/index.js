const express = require('express');
const { buscarEndereco, buscarLogradouro } = require('./controladores/enderecos');

const app = express();
app.use(express.json());

app.get('/enderecos/:cep', buscarEndereco);
app.get('/enderecos/:uf/:cidade/:logradouro', buscarLogradouro);

app.listen(8000);