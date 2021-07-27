const express = require("express");
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

//a) Consulta da coleção
app.get("/livros", (req, res) => {
    res.json(livros);
});

//b) Consulta de um livro por ID
app.get("/livros/:idLivro", (req, res) => {
    const idSolicitado = Number(req.params.idLivro);
    const livroEncontrado = livros.find(livro => livro.id === idSolicitado);
    if (livroEncontrado) {
        return res.json(livroEncontrado);
    } else if (Number.isInteger(idSolicitado)) {
        return res.json({ "mensagem": "Não existe livro para o ID informado."});
    }
    res.json({ "mensagem": "O valor do parâmetro ID da URL não é um número válido."});
});

//c) Adicionar um livro

let proximoID = 3;

app.post("/livros", (req, res) => {
    const novoLivro = {
        id: proximoID,
        titulo: req.body.titulo,
        autor: req.body.autor,
        ano: req.body.ano,
        numPaginas: req.body.numPaginas
    };
    livros.push(novoLivro);

    proximoID++

    res.json(novoLivro);
});


//d) Substituindo um livro
app.put("/livros/:idLivro", (req, res) => {
    const idSolicitado = Number(req.params.idLivro);
    const livroEncontrado = livros.find(livro => livro.id === idSolicitado);
    if (livroEncontrado) {
        livroEncontrado.titulo = req.body.titulo;
        livroEncontrado.autor = req.body.autor;
        livroEncontrado.ano = req.body.ano;
        livroEncontrado.numPaginas = req.body.numPaginas;
        res.json({"mensagem": "Livro substituído."});
    } else {
        res.json({"mensagem": "Não existe livro a ser substituído para o ID informado."});
    }
});


//e) Alterando um livro
app.patch("/livros/:idLivro", (req, res) => {
    const idSolicitado = Number(req.params.idLivro);
    const livroEncontrado = livros.find(livro => livro.id === idSolicitado);

    if (livroEncontrado) {
        if (req.body.titulo !== undefined) {
		    livroEncontrado.titulo = req.body.titulo;
        } 
        if (req.body.autor !== undefined) {
            livroEncontrado.autor = req.body.autor;
        } 
        if (req.body.ano !== undefined) {
            livroEncontrado.ano = req.body.ano;
        } 
        if (req.body.numPaginas !== undefined) {
            livroEncontrado.numPaginas = req.body.numPaginas;
        } 
        return res.json({"mensagem": "Livro alterado."});
    }
    
    res.json({"mensagem": "Não existe livro a ser alterado para o ID informado."});

});


//f) Remoção de um livro
app.delete("/livros/:idLivro", (req, res) => {
    const idSolicitado = Number(req.params.idLivro);
    const livroEncontrado = livros.find(livro => livro.id === idSolicitado);
    const indice = livros.indexOf(livroEncontrado);
    if (livroEncontrado) {
        livros.splice(indice, 1);
         return res.json({"mensagem": "Livro removido."});
    }
    res.json({"mensagem": "Não existe livro a ser removido para o ID informado."});
});



app.listen(8000);