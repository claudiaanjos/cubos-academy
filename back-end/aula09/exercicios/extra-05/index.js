const express = require("express");
const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

let index = 0;

app.get("/jogar", (req, res) => {
    if (index < jogadores.length) {
        res.send(`É a vez de ${jogadores[index]} jogar!`);
        index++;
    } else {
        index = 0;
        res.send(`É a vez de ${jogadores[index]} jogar!`);
    }
});


app.get("/remover", (req, res) => {
    const indice = req.query.indice;

    if (indice < jogadores.length) {
        jogadores.splice(indice, 1);
        res.send(jogadores);
    } else {
        res.send(`Não existe jogador no índice ${indice} para ser removido.`);
    }
});

app.get("/adicionar", (req, res) => {
    let nome = req.query.nome;
    const indice = req.query.indice;

    nome = nome.slice(0, 1).toUpperCase() + nome.slice(1).toLowerCase();

    if (indice) {
        if (indice < jogadores.length) {
            jogadores.splice(indice, 0, nome);
            res.send(jogadores);
        } else {
            res.send(`O índice ${indice} não existe no array. Novo jogador não adicionado.`)
        }
    } else {
        jogadores.push(nome);
        res.send(jogadores);
    }
});

app.listen(8000);