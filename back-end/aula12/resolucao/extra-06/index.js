
function taValendoAPromocao(inicioDaPromocao, solicitacaoDeUso) {
    return +solicitacaoDeUso < +(inicioDaPromocao.setHours(inicioDaPromocao.getHours() + 24));
}

const inicioDaPromocao = new Date(2021,3,27, 18,30);

const solicitacaoDeUso = new Date(2021,3,28, 18,29,59,999);

console.log(taValendoAPromocao(inicioDaPromocao, solicitacaoDeUso));