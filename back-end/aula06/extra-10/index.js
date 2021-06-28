const notas = [6, 20, 33, 454, 8, 9, 9, 6, 8, 9, 20, 20, 33]

const novaNotas =[]

notas.forEach(nota => {
    if (!novaNotas.find(pontos => pontos === nota)){
        novaNotas.push(nota)
    }
})

console.log(novaNotas)