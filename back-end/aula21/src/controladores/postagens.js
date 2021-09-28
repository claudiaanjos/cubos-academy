const conexao = require('../conexao');


const todasPostagens = async (req, res) => {
    try {
        const postagens = await conexao.query('select * from postagens');

        return res.status(200).json(postagens.rows);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const postagensUsuario = async (req, res) => {
    const { usuario } = req;

    try {
        const postagens = await conexao.query('select * from postagens where usuario_id = $1', [usuario.id]);

        return res.status(200).json(postagens.rows);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}


const cadastrarPostagem = async (req, res) => {
    const { texto } = req.body;
    const { usuario } = req;

    if (!texto) {
        return res.status(404).json('O campo texto é obrigatório!');
    }

    try {
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
    const { texto } = req.body;
    const { usuario } = req;
    const { id: idPostagem } = req.params;

    if (!texto) {
        return res.status(404).json('O campo texto é obrigatório!');
    }

    try {
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


const excluirPostagem = async (req, res) => {
    const { usuario } = req;
    const { id } = req.params;

    try {
        const queryPostagemExistente = 'select * from postagens where id = $1 and usuario _id = $2';
        const postagemExistente = await conexao.query(queryPostagemExistente, [id, usuario.id]);

        if (postagemExistente.rowCount === 0) {
            return res.status(404).json('Postagem não encontrada.');
        }

        const { rowCount } = await conexao.query('delete from postagens where id = $1', [id]);

        if (rowCount === 0) {
            return res.status(400).json('Não foi possível excluir a postagem.');
        }

        return res.status(200).json('Postagem excluida com sucesso.');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}




module.exports = {
    cadastrarPostagem,
    atualizarPostagem,
    excluirPostagem,
    todasPostagens,
    postagensUsuario
}