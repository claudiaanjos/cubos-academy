const express = require('express');
const newsletter = require('./controladores/newsletter');

const rotas = express();

// cadastro de usuario
rotas.post('/emails', newsletter.cadastrarEmail);

// login
rotas.post('/newsletter', newsletter.enviarNewsletter);

module.exports = rotas;