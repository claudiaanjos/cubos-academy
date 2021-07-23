// Importando o express
const express = require("express");

// Criando um aplicação
const app = express();

// Quero que a aplicação trate o verbo get na rota barra
app.get("/", (req, res) => {
    console.log("Recebi um GET /");
    // posso usar o res para responder
    res.send("Olá");
});

// Posso pedir para a aplicação escutar as requisições numa porta / Está esperando requisições
// app.listen(8000);

// Acessar https://localhost:8000/ para receber a resposta

// Se eu criar outro get, preciso parar a execução anterior com Ctrl c e executar tudo novamente
app.get("/academy", (req, res) => {
    console.log("Recebi meu outro GET");
    
    res.send("Meu primeiro servidor!");
});

app.listen(8000);

// Utilizamos o nodemon para não precidar parar e iniciar a execução do servidor
// npm i nodemon
// npx nodemon nomedoarquivo

// Acessar https://localhost:8000/academy para receber a resposta