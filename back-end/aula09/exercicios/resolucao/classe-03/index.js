const express = require('express');

const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let jogadorDaVez = 0;

app.get("/", (req, res) => {
    const nomeJogador = jogadores[jogadorDaVez];
    jogadorDaVez++;
    if (jogadorDaVez >= jogadores.length) {
        jogadorDaVez = 0;
    }
    res.send(`É a vez de ${nomeJogador} jogar!`);
});

app.listen(8000);