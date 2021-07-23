const express = require("express");
const app = express();


const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

let index = 0;

app.get("/jogadores", (req, res) => {
    if (index < jogadores.length) {
        res.send(`É a vez de ${jogadores[index]} jogar!`);
        index++;
    } else {
        index = 0;
        res.send(`É a vez de ${jogadores[index]} jogar!`);
    }
});

app.listen(8000); 

