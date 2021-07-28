const alunos = [
    {
        nome: "Paula",
        apelido: "Paulete",
        idade: 26,
        signo: "Áries",
        bandaFavorita: "Rolling Stones",
        email: "paulete123@gmail.com",
        serieFavorita: "Dark",
        curso: "PDZ",
        roupaDeDormir: "pijama"
    },
    {
        nome: "Felisberto",
        apelido: "Betinho",
        idade: 20,
        signo: "Sargitário",
        bandaFavorita: "Madonna",
        email: "betinho.felis@gmail.com",
        serieFavorita: "Um maluco no pedaço",
        curso: "PDZ",
        roupaDeDormir: "só cueca"
    }
];

const alunosResumido = [];

// Abaixo duas formas de fazer:
// Uma com for..of
// Outra com o método map() de arrays
// Comente / descomente a que quiser testar! =)

for (let aluno of alunos) {
    const {nome, idade, email, curso} = aluno;

    alunosResumido.push({
        nome,
        idade,
        email,
        curso
    });
}

// alunosResumido = alunos.map(aluno => {
//     const {nome, idade, email, curso} = aluno;

//     return {
//         nome,
//         idade,
//         email,
//         curso
//     }
// });

console.log(alunosResumido);