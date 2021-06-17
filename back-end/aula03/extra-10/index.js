const numeros = [8, 11, 4, 1]

let diferenca = 0
for (let numero of numeros){
    let maior = Math.max(...numeros)
    let menor = Math.min(...numeros)
    diferenca = maior - menor
}

console.log(diferenca)

