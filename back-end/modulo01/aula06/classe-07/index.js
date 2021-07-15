const fs = require('fs');

const mensagem = "Estou aprendendo JavaScript na Cubos Academy."

fs.writeFile("./meuarquivo.txt", mensagem, () => {
    console.log("Arquivo escrito!")
});


// Outra Resolução

const fs = require('fs');

fs.writeFile('meuarquivo.txt', 'Estou aprendendo JavaScript na Cubos Academy', function (err) {
    if (err) {
        console.log(err.message);
    } else {
        console.log('arquivo criado');
    }
});