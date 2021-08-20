const paises = document.querySelector('.paises');
const input = document.querySelector('.busca');
let objectPaises = {};

fetch('https://restcountries.eu/rest/v2/all').then(function(resposta) {
    const promiseBody = resposta.json();
    
    promiseBody.then(function(body) {
        objectPaises = body;
        objectPaises.forEach(function(item) {
            const pais = document.createElement('div');
            pais.classList.add('pais');

            const nome = document.createElement('h2');
            nome.textContent = item.name;

            const regiao = document.createElement('span');
            regiao.textContent = "Região: " + item.region + " ";

            const capital = document.createElement('span');
            capital.textContent = "Capital: " + item.capital;

            const populacao = document.createElement('p');
            populacao.textContent = "População: " + item.population;

            const bandeira = document.createElement('img');
            bandeira.src = item.flag;
            bandeira.alt = item.name;

            pais.append(nome, regiao, capital, populacao, bandeira);
            paises.append(pais);

            // input.addEventListener('keydown', function (event) {
                
            //     if (event.key === 'Enter') {
            //         if (!(input.value === item.name)) {
            //             pais.remove();
            //         }
            //     } else {
            //         pais.append(nome, regiao, capital, populacao, bandeira);
            //     }
                
            // });
        });
    });
});

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const divPaises = document.querySelectorAll('.pais');
        const result = divPaises.forEach(function (item) {
            if (item.childNodes[0].innerHTML === input.value) {
                item.classList.remove('esconder');
            } else {
                item.classList.add('esconder');
            }
        });
    }
});

//Outra resolução de busca

// input.addEventListener('keydown', function(event) {
//     const result = objectPaises.filter(item => item.name === input.value); //O retorno do filter é um array, portanto result[0]

//     if (result.length !== 0 && event.key === 'Enter') {
//         paises.innerHTML = '';

//         const pais = document.createElement('div');
//         pais.classList.add('pais');

//         const nome = document.createElement('h2');
//         nome.textContent = result[0].name;

//         const regiao = document.createElement('span');
//         regiao.textContent = "Região: " + result[0].region + " ";

//         const capital = document.createElement('span');
//         capital.textContent = "Capital: " + result[0].capital;

//         const populacao = document.createElement('p');
//         populacao.textContent = "População: " + result[0].population;

//         const bandeira = document.createElement('img');
//         bandeira.src = result[0].flag;
//         bandeira.alt = result[0].name;

//         pais.append(nome, regiao, capital, populacao, bandeira);
//         paises.append(pais);
//     }
// });
