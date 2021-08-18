const paises = document.querySelector('.paises');
const input = document.querySelector('.busca');


fetch('https://restcountries.eu/rest/v2/all').then(function(resposta) {
    const promiseBody = resposta.json();
    
    promiseBody.then(function(body) {
        body.forEach(function(item) {
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
        });
    });
});

input.addEventListener('keydown', function(event) {
    if (event.key !== 'Enter' || input.value === '') return;
    

});