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

app.get("/consulta", (req,res) => {
    res.send(jogadores);
});

app.get("/remover", (req, res) => {
    const indiceDoArray = Number(req.query.indice);
    if (indiceDoArray >= jogadores.length) {
        res.send(`Não existe jogador no índice informado (${indiceDoArray}) para ser removido.`);
    } else {
        jogadores.splice(indiceDoArray, 1);
        res.send(jogadores);
    }
});

app.get("/adicionar", (req, res) => {
    let nomeJogador = req.query.nome;
    const indiceDoArray = Number(req.query.indice);

    nomeJogador = nomeJogador[0].toUpperCase() + nomeJogador.substr(1).toLowerCase();

    if (isNaN(indiceDoArray)) {
        jogadores.push(nomeJogador);
        res.send(jogadores);
    } else {
        if (indiceDoArray >= jogadores.length) {
            res.send(`O índice informado (${indiceDoArray}) não existe no array. Novo jogador não adicionado.`);
        } else {
            jogadores.splice(indiceDoArray, 0, nomeJogador);
            res.send(jogadores);
        }
    }
});

app.listen(8000);