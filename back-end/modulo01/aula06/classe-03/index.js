const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]

const novasFrutas = frutas.map((x,i) => {
    let frutaModificada = x.toLowerCase()
    frutaModificada = frutaModificada.charAt(0).toUpperCase() + frutaModificada.slice(1)
    return `${i} - ${frutaModificada}`
})


console.log(novasFrutas)



// Outra Resolução

const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const novoArray = frutas.map(function (valor, index) {
    let fruta = valor.toLowerCase();
    let primeiraLetra = fruta.substr(0, 1).toUpperCase();
    let semPrimeiraLetra = fruta.substr(1);
    let nomeFruta = `${index} - ${primeiraLetra}${semPrimeiraLetra}`;

    return nomeFruta;
});

console.log(novoArray);