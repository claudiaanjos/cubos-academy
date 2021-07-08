const usuarios = [
    {
        nome: "André",
        idade: 29,
        habilitado: false,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: true,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
]


let validacao = usuarios.every((item) => item.idade > 18 && item.idade < 65 && item.habilitado === true) === true ? `Todos passaram no teste` : `Todos precisam estar habilitados`

console.log(validacao)



// Outra Resolução

const usuarios = [
    {
        nome: "André",
        idade: 29,
        habilitado: false,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: false,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
];

const usuariosFaixaEtaria = usuarios.filter(function (valor) {
    return valor.idade >= 18 && valor.idade <= 65;
});

const todosHabilitados = usuariosFaixaEtaria.every(function (valor) {
    return valor.habilitado == true;
});

if (todosHabilitados) {
    console.log('todos passaram no teste');
} else {
    console.log('todos precisam estar habilitados');
}