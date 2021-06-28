const pessoas = [
    {
        nome: 'Antonio',
        idade: 30,
        profissao: 'Jornalista'
    },
    {
        nome: 'Maria',
        idade: 30,
        profissao: 'Jornalista'
    },
    {
        nome: 'Ana',
        idade: 21,
        profissao: 'Programador'
    },
    {
        nome: 'Beatriz',
        idade: 20,
        profissao: 'Programador'
    },
    {
        nome: 'José',
        idade: 32,
        profissao: 'Jornalista'
    },
    {
        nome: 'Marcos',
        idade: 30,
        profissao: 'Programador'
    }
]

// const programadores = pessoas.filter(pessoa => {
//     if (pessoa.idade > 20 && pessoa.profissao === "Programador") {
//         return true
//     } else {
//         return false
//     }
// })


// const programadores = pessoas.filter(pessoa => {
//     return pessoa.idade > 20 && pessoa.profissao === "Programador"
// })


const programadores = pessoas.filter(pessoa => pessoa.idade > 20 && pessoa.profissao === "Programador")
console.log(programadores)


const jornalistas = pessoas.filter(pessoa => pessoa.idade > 30 && pessoa.profissao === "Jornalista")
console.log(jornalistas)


const jovens = pessoas.filter(pessoa => pessoa.idade < 29 && (pessoa.profissao === "Jornalista" || pessoa.profissao === "Programador"))
console.log(jovens)