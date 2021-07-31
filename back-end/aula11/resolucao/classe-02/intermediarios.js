
function validaSenha(req, res, next) {
    if (req.query.senha !== "cubos123") {
        res.status(401).json({ mensagem: "Senha incorreta." });
    }
    else {
        next();
    }
}

module.exports = validaSenha;