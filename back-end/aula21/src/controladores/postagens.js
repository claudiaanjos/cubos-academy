const jwt = require('jsonwebtoken');
const segredo = require('../segredo');
const conexao = require('../conexao');

const cadastrarPostagem = async (req, res) => {
    const { texto, token } = req.body;

    if (!texto) {
        return res.status(404).json('O campo texto é obrigatório!');
    }
    if (!token) {
        return res.status(404).json('O campo token é obrigatório!');
    }

    try {
        const { id } = jwt.verify(token, segredo);

        const query = 'select * from usuarios where id = $1';
        const { rows, rowCount } = await conexao.query(query, [id]);

        if (rowCount === 0) {
            return res.status(404).json('Usuário não encontrado.');
        }

        const usuario = rows[0];

        const postagem = await conexao.query('insert into postagens (usuario_id, texto) values ($1, $2)', [usuario.id, texto]);

        if (postagem.rowCount === 0) {
            return res.status(400).json('Não foi possível cadastrar a postagem.');
        } 

        return res.status(200).json('A postagem foi cadastrada com sucesso.');

    } catch (error) {
        return res.status(400).json(error.message);
    }
}



const atualizarPostagem = async (rea, res) => {
    const { texto, token } = req.body;
    const { id: idPostagem } = req.params;

    if (!texto) {
        return res.status(404).json('O campo texto é obrigatório!');
    }
    if (!token) {
        return res.status(404).json('O campo token é obrigatório!');
    }

    try {
        const { id } = jwt.verify(token, segredo);

        const query = 'select * from usuarios where id = $1';
        const { rows, rowCount } = await conexao.query(query, [id]);

        if (rowCount === 0) {
            return res.status(404).json('Usuário não encontrado.');
        }

        const usuario = rows[0];

        const queryPostagemExistente = 'select * from postagens where id = $1 and usuario _id = $2';
        const postagemExistente = await conexao.query(queryPostagemExistente, [idPostagem, usuario.id]);

        if (postagemExistente.rowCount === 0) {
            return res.status(404).json('Postagem não encontrada.');
        }

        const postagem = await conexao.query('update postagens set texto = $1 where id = $2 and usuario_id = $3', [texto, idPostagem, usuario.id]);

        if (postagem.rowCount === 0) {
            return res.status(400).json('Não foi possível atualizar a postagem.');
        }

        return res.status(200).json('A postagem foi atualizada com sucesso.');

    } catch (error) {
        return res.status(400).json(error.message);
    }
}


module.exports = {
    cadastrarPostagem,
    atualizarPostagem
}