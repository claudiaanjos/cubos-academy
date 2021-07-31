function senha (req, res, next) {
    if (req.query.senha === 'cubos123') {
        next();
    } else {
        res.status(401);
        res.json({ "mensagem": "Senha incorreta." })
    }
}


module.exports = { senha };