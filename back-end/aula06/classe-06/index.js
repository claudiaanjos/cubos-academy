const jogadores = ['Guido', 'Dina', 'Léo', 'Nanda', 'Juninho'];

let contagem = jogadores.length
let contador = 0

const intervalo = setInterval(() => {
    if(contador < contagem){
        console.log(jogadores[contador])
        contador++
    } 
    if (contador === contagem) {
        clearInterval(intervalo)
    }
}, (10 / contagem) * 1000)


// Outra Resolução

const jogadores = ['Guido', 'Dina', 'Léo', 'Nanda', 'Juninho'];

let i = 0;
function rodada() {
    if (i < jogadores.length) {
        console.log(jogadores[i]);
        i++;
    } else {
        console.log('A rodada terminou!');
        clearInterval(intervalId);
    }
}


const intervalId = setInterval(rodada, (10 / jogadores.length) * 1000)