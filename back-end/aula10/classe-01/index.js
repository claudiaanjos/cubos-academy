const express = require("express");
const app = express();
app.use(express.json());

const convidados = ["Carlos", "Amanda", "Fernanda", "Juliana", "Lucas", "Roberto"];

app.get("/convidados", (req, res) => {
    //a) Consulta a lista inteira de convidados
    res.json(convidados); 

    //b) Consulta se existe um nome específico na lista de convidados
    const nome = req.query.nome;
    for(let i = 0; i < convidados.length; i++) {
        if(nome === convidados[i]) {
            res.json({ "mensagem": "Convidado presente." })
        } else {
            res.json({ "mensagem": "O convidado buscado não está presente na lista." });
        }
    } 
});

//c) Adicionar um nome na lista de convidados
app.post("/convidados", (req, res) => {
    const { nome: novoConvidado } = req.body;
    const convidadoExiste = convidados.find(convidado => convidado === novoConvidado);
    if (!convidadoExiste) {
        convidados.push(novoConvidado);
        return res.json({ "mensagem": "Convidado adicionado." });
    }
    res.json({ "mensagem": "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também." });

});


//d) Remover um nome da lista de convidados
app.delete("/convidados/:nome", (req, res) => {
    const convidadoDeletado = convidados.find(convidado => convidado === req.params.nome);
    const indice = convidados.indexOf(convidadoDeletado);
    console.log(indice)
    if (convidadoDeletado) {
        convidados.splice(indice, 1);
        return res.json({ "mensagem": "Convidado removido." });
    } 
    res.json({ "mensagem": "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido." });
});


app.listen(8000);