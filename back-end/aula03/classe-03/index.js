const numeros = [54, 22, 14, 87, 284]

let encontrado = false
for (let numero of numeros){
    if(numero === 10){
        encontrado = true
        console.log(numeros.indexOf(numero))
    }
}

if (!encontrado){
    console.log(-1)
}


