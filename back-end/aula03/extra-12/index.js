const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

for (let i = 0; filaDeDentro.length < 5; i++){
    filaDeDentro.push(filaDeFora[0])
    filaDeFora.shift()
}

console.log(filaDeDentro)
console.log(filaDeFora)

