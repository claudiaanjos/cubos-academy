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



// Outra Resolução

let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";
let tags = ['financeiro', 'administrativo', 'geral'];

identificador = identificador.padStart(6, '0');

let splitNome = nome.split(' ');

let nomeMaiusculo = [];

for (const nome of splitNome) {
    nomeMaiusculo.push(`${nome.substr(0, 1).toUpperCase()}${nome.substr(1).toLowerCase()}`);
}

nome = nomeMaiusculo.join(' ');

email = email.trim();

tags = tags.join(', ');

console.log(identificador);
console.log(nome);
console.log(email);
console.log(tags);