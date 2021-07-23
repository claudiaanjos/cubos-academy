const express = require("express");
const app = express();

let minutos = 1;
let segundos = 7;

app.get("/", (req, res) => {
    minutos = String(minutos).padStart(2, "0");
    segundos = String(segundos).padStart(2, "0");

    res.send(`Tempo atual do cronômetro: ${minutos} minutos e ${segundos} segundos`)
});

app.get("/iniciar", (req, res) => {
    res.send("Cronômetro iniciado!");

});

app.get("/pausar", (req, res) => {
    res.send("Cronômetro pausado!");
});

app.get("/continuar", (req, res) => {
    res.send("Cronômetro continuando!");
});

app.get("/zerar", (req, res) => {
    res.send("Cronômetro zerado!");
});

app.listen(8000);