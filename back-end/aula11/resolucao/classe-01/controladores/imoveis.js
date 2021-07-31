const imoveis = require("../dados/imoveis");

function get(req, res) {
    res.json(imoveis);
}

function getPorId(req, res) {
    res.json(imoveis.find(i => i.id === Number(req.params.id)));
}

module.exports = { get, getPorId };