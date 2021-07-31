const express = require("express");
const validaSenha = require("./intermediarios");
const roteador = require("./roteador");

const app = express();

app.use(express.json());
app.use(validaSenha);
app.use(roteador);

app.listen(8000);