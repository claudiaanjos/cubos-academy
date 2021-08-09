function promocao (inicio, solicitacao) {
    inicio = inicio.setDate(inicio.getDate() + 30);
    if (+solicitacao < +inicio) {
        return true;
    } else {
        return false;
    }
}

const inicio= new Date(2021, 3, 27, 18, 30);
const solicitacao = new Date(2021, 4, 27, 17, 30);

console.log(promocao(inicio, solicitacao));