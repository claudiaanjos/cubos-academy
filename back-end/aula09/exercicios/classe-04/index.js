const express = require("express");
const app = express();

app.get("/somar", (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    res.send(`Resposta: ${String(num1 + num2)}`);
});

app.get("/subtrair", (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    res.send(`Resposta: ${String(num1 - num2)}`);
});

app.get("/multiplicar", (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    res.send(`Resposta: ${String(num1 * num2)}`);
});

app.get("/dividir", (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    res.send(`Resposta: ${String(num1 / num2)}`);
});

app.listen(8000);