const express = require('express');

const app = express();

let rodando = false;
let minutos = 0;
let segundos = 0;

let setIntervalDisparado = false;

function iniciarCronometro() {
    rodando = true;
    if (!setIntervalDisparado) {
        setInterval(() => {
            if (rodando) {
                if (segundos == 59) {
                    segundos = 0;
                    minutos++;
                } else {
                    segundos++
                }
            }
        }, 1000);
        setIntervalDisparado = true;
    }
}

app.get("/", (req, res) => {
    res.send(`Tempo atual do cronômetro: ${minutos.toString().padStart(2, "0")} minutos e ${segundos.toString().padStart(2, "0")} segundos`);
});

app.get("/iniciar", (req, res) => {
    iniciarCronometro();
    res.send("Cronômetro iniciado!");
});

app.get("/pausar", (req, res) => {
    rodando = false;
    res.send("Cronômetro pausado!");
});

app.get("/continuar", (req, res) => {
    rodando = true;
    res.send("Cronômetro continuando!");
});

app.get("/zerar", (req, res) => {
    minutos = 0;
    segundos = 0;
    res.send("Cronômetro zerado!");
});

app.listen(8000);