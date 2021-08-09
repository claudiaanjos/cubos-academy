const axios = require('axios');
const fs = require('fs/promises');

async function buscarEndereco(req, res) {
    const cep = req.params.cep;

    if (!cep) {
        res.status(400).json({ mensagem: "Um cep deve ser informado." });
        return;
    }

    const enderecos = JSON.parse(await fs.readFile('./dados/enderecos.json'));

    let enderecoEncontrado;

    if (enderecos && Array.isArray(enderecos)) {
        enderecoEncontrado = enderecos.find(e => e.cep.replace('-', '') === cep);

        if (enderecoEncontrado) {
            res.json(enderecoEncontrado);
            return;
        }

        enderecoEncontrado = (await axios.get(`https://viacep.com.br/ws/${cep}/json/`)).data;

        if (enderecoEncontrado) {
            enderecos.push(enderecoEncontrado);

            fs.writeFile('./dados/enderecos.json', JSON.stringify(enderecos));

            res.json(enderecoEncontrado);
            return;
        }
    }
}

async function buscarLogradouro(req, res) {
    const uf = req.params.uf;
    const cidade = req.params.cidade;
    const logradouro = req.params.logradouro;

    if (!uf) {
        res.status(400).json({ mensagem: "Um estado deve ser informado." });
        return;
    }

    if (!cidade) {
        res.status(400).json({ mensagem: "Uma cidade deve ser informada." });
        return;
    }

    if (!logradouro) {
        res.status(400).json({ mensagem: "Ao menos uma parte do logradouro deve ser informada." });
        return;
    }

    let enderecos = JSON.parse(await fs.readFile('./dados/enderecos.json'));

    let enderecosEncontrados;

    if (enderecos && Array.isArray(enderecos)) {
        enderecosEncontrados = enderecos.filter(e => e.logradouro.toLowerCase().includes(logradouro.toLowerCase()));

        if (enderecosEncontrados && enderecosEncontrados.length > 0) {
            res.json(enderecosEncontrados);
            return;
        }

        enderecosEncontrados = (await axios.get(`https://viacep.com.br/ws/${uf}/${cidade}/${logradouro}/json/`)).data;

        if (enderecosEncontrados) {
            enderecos = enderecos.concat(enderecosEncontrados);

            fs.writeFile('./dados/enderecos.json', JSON.stringify(enderecos));

            res.json(enderecosEncontrados);
            return;
        }
    }
}

module.exports = { buscarEndereco, buscarLogradouro };