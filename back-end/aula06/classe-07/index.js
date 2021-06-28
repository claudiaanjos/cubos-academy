const fs = require('fs');

const mensagem = "Estou aprendendo JavaScript na Cubos Academy."

fs.writeFile("./meuarquivo.txt", mensagem, () => {
    console.log("Arquivo escrito!")
});

