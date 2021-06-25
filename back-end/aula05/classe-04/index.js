let identificador = "123";
let nome = "josé silva costa";
let email = "      jose@email.com  ";
let tags = ['financeiro', 'administrativo', 'geral'];


// identificador
if (identificador.length !== 6) {
    console.log(identificador.padStart(6, "0"))
} else {
    console.log(identificador)
}


//nome
let arrayNome = nome.split(" ")
let novoNome = []
let maiusc = ""
for (let palavra of arrayNome) {
    maiusc = palavra[0].toUpperCase()
    novoNome.push(palavra.replace(palavra[0], maiusc))
}

novoNome = novoNome.join(" ")
console.log(novoNome)


//email
email = email.trim()
console.log(email)


//tags
tags = tags.join(", ")
console.log(tags)

