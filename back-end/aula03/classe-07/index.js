const nomes = ["Ana", "Joana", "Carlos", "amanda"];

const novosNomes = []
for (let nome of nomes){
    if (nome[0] === "A" || nome[0] === "a"){
        novosNomes.push(nome)
    }
}

console.log(novosNomes)

