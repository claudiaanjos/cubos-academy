const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]

const novasFrutas = frutas.map((x,i) => {
    let frutaModificada = x.toLowerCase()
    frutaModificada = frutaModificada.charAt(0).toUpperCase() + frutaModificada.slice(1)
    return `${i} - ${frutaModificada}`
})


console.log(novasFrutas)

