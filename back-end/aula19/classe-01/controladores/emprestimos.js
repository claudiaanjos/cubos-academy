const conexao = require("../conexao");


// LISTAR TODOS OS Emprestimos

const listarEmprestimos = async (req, res) => {
    try {
        const { rows: emprestimos } = await conexao.query("select * from emprestimos;");

        res.status(200).json(emprestimos);
    } catch (error) {
        return res.status(400).json(error.message)
    }
};

const obterEmprestimo = async (req, res) => {
    const { id } = req.params
    try {
        const Emprestimo = await conexao.query("select * from emprestimos where id = $1", [id]);
        if (Emprestimo.rowCount === 0) {
            res.status(404).json('Nenhum Emprestimo foi encontrado');
        }
        res.status(200).json(Emprestimo.rows);
    } catch (error) {
        return res.status(400).json(error.message)
    }
};

const cadastrarEmprestimo = async (req, res) => {
    const { id_usuario, id_livro } = req.body

    if (!id_usuario || !id_livro) {
        res.status(400).json('Todos os campos são obrigatórios');
    }

    try {
        const query = "insert into emprestimos (id_usuario,id_livro) values ($1,$2)"
        const Emprestimo = await conexao.query(query, [id_usuario, id_livro]);

        if (Emprestimo.rowCount === 0) {
            res.status(400).json('Não foi possível cadastrar o Emprestimo');
        }
        res.status(200).json('Emprestimo cadastrado com sucesso');
    } catch (error) {
        return res.status(400).json(error.message)
    }
};

const atualizarEmprestimo = async (req, res) => {
    const { id } = req.params;

    const { id_usuario, id_livro } = req.body

    if (!id_usuario || !id_livro) {
        res.status(400).json('Todos os campos são obrigatórios');
    }

    try {
        const Emprestimo = await conexao.query("select * from emprestimos where id = $1", [id]);

        if (Emprestimo.rowCount === 0) {
            res.status(404).json('Nenhum Emprestimo foi encontrado');
        }

        const query = "update emprestimos set id_usuario = $1, id_livro = $2 where id = $3"

        const emprestimoAtualizado = await conexao.query(query, [id_usuario, id_livro, id]);

        if (emprestimoAtualizado.rowCount === 0) {
            res.status(400).json('Não foi possível cadastrar o Emprestimo');
        }
        res.status(200).json('Emprestimo Atualizado com sucesso');

    } catch (error) {
        return res.status(400).json(error.message)
    }
};

const excluirEmprestimo = async (req, res) => {
    const { id } = req.params
    try {
        const Emprestimo = await conexao.query("select * from emprestimos where id = $1", [id]);

        if (Emprestimo.rowCount === 0) {
            res.status(404).json('Nenhum Emprestimo foi encontrado');
        }

        const emprestimoExcluido = await conexao.query("delete from emprestimos where id = $1", [id]);
        if (emprestimoExcluido.rowCount === 0) {
            res.status(404).json('Não foi possível deletar nenhum Emprestimo');
        }
        res.status(200).json('Emprestimo excluido com sucesso!');
    } catch (error) {
        return res.status(400).json(error.message)
    }
};

module.exports = {
    listarEmprestimos,
    obterEmprestimo,
    cadastrarEmprestimo,
    atualizarEmprestimo,
    excluirEmprestimo,
};