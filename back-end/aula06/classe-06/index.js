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

