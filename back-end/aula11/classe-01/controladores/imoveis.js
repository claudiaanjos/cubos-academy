const imoveis = require("../dados/imoveis");

function consultarTodosImoveis (req, res) {
    res.json(imoveis);
}

function consultarImovel (req, res) {
    const imovel = imoveis.find(imovel => imovel.id === Number(req.params.idConsultado));
    res.json(imovel);
}


module.exports = { consultarTodosImoveis, consultarImovel };