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

let alunosResumido = [];

for (let aluno of alunos) {
    const { nome, idade, email, curso } = aluno;
    alunosResumido.push({
        nome: nome,
        idade: idade,
        email: email,
        curso: curso
    });
}

console.log(alunosResumido); 


// Outras formas

// Com for
const alunosResumido = [];
for (let { nome, idade, email, curso } of alunos) {
    alunosResumido.push({ nome: nome, idade: idade, email: email, curso: curso });
}

// Com map
const alunosResumido = alunos.map(resumo);
function resumo(aluno) {
    const { nome, idade, email, curso } = aluno;
    return { nome, idade, email, curso };
}

// Refatorado com map
const alunosResumido = alunos.map(({ nome, idade, email, curso }) => ({ nome, idade, email, curso }));