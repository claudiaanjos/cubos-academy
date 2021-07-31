const express = require('express');

const app = express();
app.use(express.json());

const convidados = ["Carlos", "Amanda", "Fernanda", "Juliana", "Lucas", "Roberto"];

app.get("/convidados", (req, res) => {
    if (!req.query.nome) {
        res.json(convidados);
    }
    else {
        const convidadoBuscado = convidados.find(x => x === req.query.nome);
        if (!convidadoBuscado) {
            res.json({ mensagem: "O convidado buscado não está presente na lista." });
        }
        else {
            res.json({ mensagem: "Convidado presente." });
        }
    }
});

app.post("/convidados", (req, res) => {
    const convidadoExistente = convidados.find(x => x === req.body.nome);

    if (convidadoExistente) {
        res.json({ mensagem: "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também."});
    }
    else {
        convidados.push(req.body.nome);
        res.json({ mensagem: "Convidado adicionado."});
    }

    res.send();
});

app.delete("/convidados/:nome", (req, res) => {
    const indiceConvidadoExistente = convidados.findIndex(x => x === req.params.nome);

    if (indiceConvidadoExistente < 0) {
        res.json({ mensagem: "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido."});
    }
    else {
        convidados.splice(indiceConvidadoExistente, 1);
        console.log(convidados);
        res.json({ mensagem: "Convidado removido."});
    }
});

app.listen(8000);