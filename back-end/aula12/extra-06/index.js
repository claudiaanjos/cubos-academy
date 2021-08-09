function promocao (inicio, solicitacao) {
    inicio = inicio.setHours(inicio.getHours() + 24);
    if (+solicitacao < +inicio) {
        return true;
    } else {
        return false;
    }
}

const inicio = new Date(2021, 3, 27, 18, 30);

const solicitacao = new Date(2021, 3, 28, 18, 29, 59, 999);

console.log(promocao(inicio, solicitacao));