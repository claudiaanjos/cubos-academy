const conexao = require('../conexao');

const listarProdutos = async (req, res) => {
    const { usuario } = req;
    const { categoria } = req.query;

    try {
        let condicao = '';
        const params = [];

        if (categoria) {
            condicao += 'and categoria ilike $2';
            params.push(`%${categoria}%`);
        }

        const query = `select * from produtos where usuario_id = $1 ${condicao}`;
        const { rows: produtos } = await conexao.query(query, [usuario.id, ...params]);

        return res.status(200).json(produtos);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const obterProduto = async (req, res) => {
    const { usuario } = req;
    const { id } = req.params;

    try {
        const query = `select * from produtos where usuario_id = $1 and id = $2`;
        const { rows, rowCount } = await conexao.query(query, [usuario.id, id]);

        if (rowCount === 0) {
            return res.status(404).json('Produto não encontrado');
        }

        return res.status(200).json(rows[0]);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const cadastrarProduto = async (req, res) => {
    const { usuario } = req;
    const { nome, estoque, preco, categoria, descricao, imagem } = req.body;

    if (!nome) {
        return res.status(404).json('O campo nome é obrigatório');
    }

    if (!estoque) {
        return res.status(404).json('O campo estoque é obrigatório');
    }

    if (!preco) {
        return res.status(404).json('O campo preco é obrigatório');
    }

    if (!descricao) {
        return res.status(404).json('O campo descricao é obrigatório');
    }

    try {
        const query = 'insert into produtos (usuario_id, nome, estoque, preco, categoria, descricao, imagem) values ($1, $2, $3, $4, $5, $6, $7)';
        const produto = await conexao.query(query, [usuario.id, nome, estoque, preco, categoria, descricao, imagem]);

        if (produto.rowCount === 0) {
            return res.status(400).json('O produto não foi cadastrado');
        }

        return res.status(200).json('O produto foi cadastrado com sucesso.');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const atualizarProduto = async (req, res) => {
    const { usuario } = req;
    const { id } = req.params;
    const { nome, estoque, preco, categoria, descricao, imagem } = req.body;

    if (!nome && !estoque && !preco && !categoria && !descricao && !imagem) {
        return res.status(404).json('Informe ao menos um campo para atualizaçao do produto');
    }

    try {
        const query = `select * from produtos where usuario_id = $1 and id = $2`;
        const { rowCount } = await conexao.query(query, [usuario.id, id]);

        if (rowCount === 0) {
            return res.status(404).json('Produto não encontrado');
        }

        const body = {};
        const params = [];
        let n = 1;

        if (nome) {
            body.nome = nome;
            params.push(`nome = $${n}`);
            n++;
        }

        if (estoque) {
            body.estoque = estoque;
            params.push(`estoque = $${n}`);
            n++;
        }

        if (categoria) {
            body.categoria = categoria;
            params.push(`categoria = $${n}`);
            n++;
        }

        if (descricao) {
            body.descricao = descricao;
            params.push(`descricao = $${n}`);
            n++;
        }

        if (preco) {
            body.preco = preco;
            params.push(`preco = $${n}`);
            n++;
        }

        if (imagem) {
            body.imagem = imagem;
            params.push(`imagem = $${n}`);
            n++;
        }

        const valores = Object.values(body);
        valores.push(id);
        valores.push(usuario.id);
        const queryAtualizacao = `update produtos set ${params.join(', ')} where id = $${n} and usuario_id = $${n + 1}`;
        const produtoAtualizado = await conexao.query(queryAtualizacao, valores);

        if (produtoAtualizado.rowCount === 0) {
            return res.status(400).json("O produto não foi atualizado");
        }

        return res.status(200).json('produto foi atualizado com sucesso.');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const excluirProduto = async (req, res) => {
    const { usuario } = req;
    const { id } = req.params;

    try {
        const query = `select * from produtos where usuario_id = $1 and id = $2`;
        const { rowCount } = await conexao.query(query, [usuario.id, id]);

        if (rowCount === 0) {
            return res.status(404).json('Produto não encontrado');
        }

        const produtoExcluido = await conexao.query('delete from produtos where id = $1', [id]);

        if (produtoExcluido.rowCount === 0) {
            return res.status(400).json("O produto não foi excluido");
        }

        return res.status(200).json('Produto excluido com sucesso');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    listarProdutos,
    obterProduto,
    cadastrarProduto,
    atualizarProduto,
    excluirProduto
}