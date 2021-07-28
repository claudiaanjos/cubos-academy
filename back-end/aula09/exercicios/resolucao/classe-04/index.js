const express = require('express');

const app = express();

app.get("/somar", (req,res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    if (!isNaN(num1) && !isNaN(num2)) {
        res.send(`${num1 + num2}`);
    }
    else {
        res.send('Números inválidos!');
    }
});

app.get("/subtrair", (req,res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    if (!isNaN(num1) && !isNaN(num2)) {
        res.send(`${num1 - num2}`);
    }
    else {
        res.send('Números inválidos!');
    }
});

app.get("/multiplicar", (req,res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    if (!isNaN(num1) && !isNaN(num2)) {
        res.send(`${num1 * num2}`);
    }
    else {
        res.send('Números inválidos!');
    }
});

app.get("/dividir", (req,res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    if (!isNaN(num1) && !isNaN(num2)) {
        res.send(`${num1 / num2}`);
    }
    else {
        res.send('Números inválidos!');
    }
});

app.listen(8000);