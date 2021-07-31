const express = require('express');

const app = express();
app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: "A Odisséia de Jonas",
        autor: "Thomas Crawling",
        ano: 2001,
        numPaginas: 197
    },
    {
        id: 2,
        titulo: "Jonas e a sociedade escondida",
        autor: "Claire Crawling",
        ano: 2004,
        numPaginas: 158
    }
];

let proximoId = 3;

app.get("/livros", (req, res) => {
    res.json(livros);
});

app.get("/livros/:id", (req, res) => {
    const livroId = Number(req.params.id);

    if (isNaN(livroId)) {
        res.json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." });
    }
    else {
        const livro = livros.find(x => x.id === livroId);
        if (!livro) {
            res.json({ mensagem: "Não existe livro para o ID informado." });
        }
        else {
            res.json(livro);
        }
    }
});

app.post("/livros", (req, res) => {
    const novoLivro = {
        id: proximoId,
        titulo: req.body.titulo,
        autor: req.body.autor,
        ano: req.body.ano,
        numPaginas: req.body.numPaginas
    };

    livros.push(novoLivro);

    proximoId++;

    res.json(novoLivro);
});

app.put("/livros/:id", (req, res) => {
    let livroExistente = livros.find(x => x.id === Number(req.params.id));

    if (!livroExistente) {
        res.json({ mensagem: "Não existe livro a ser substituído para o ID informado." });
    }
    else {
        livroExistente.titulo = req.body.titulo;
        livroExistente.autor = req.body.autor;
        livroExistente.ano = req.body.ano;
        livroExistente.numPaginas = req.body.numPaginas;

        res.json({ mensagem: "Livro substituído." });
    }
});

app.patch("/livros/:id", (req, res) => {
    const livroExistente = livros.find(x => x.id === Number(req.params.id));

    if (!livroExistente) {
        res.json({ mensagem: "Não existe livro a ser alterado para o ID informado." });
    }
    else {
        if (req.body.titulo !== undefined) {
            livroExistente.titulo = req.body.titulo;
        }

        if (req.body.autor !== undefined) {
            livroExistente.autor = req.body.autor;
        }

        if (req.body.ano !== undefined) {
            livroExistente.ano = req.body.ano;
        }

        if (req.body.numPaginas !== undefined) {
            livroExistente.numPaginas = req.body.numPaginas;
        }

        res.json({ mensagem: "Livro alterado." });
    }
});

app.delete("/livros/:id", (req, res) => {
    const indiceLivro = livros.findIndex(x => x.id === Number(req.params.id));

    if (indiceLivro < 0) {
        res.json({ mensagem: "Não existe livro a ser removido para o ID informado." });
    }
    else {
        livros.splice(indiceLivro, 1);

        res.json({ mensagem: "Livro removido." });
    }
});

app.listen(8000);