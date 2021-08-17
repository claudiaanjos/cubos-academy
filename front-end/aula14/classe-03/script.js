const pokeInput = document.querySelector('#poke');
const nome = document.querySelector('.nome');
const imagem = document.querySelector('.img');
const habilidades = document.querySelector('.habilidades');
const botao = document.querySelector('#botao');


botao.addEventListener('click', function(event) {
    if(!pokeInput.value) {
        alert("Por favor, preencha o campo pokemon.");
        return;
    }

    const promiseResponse = fetch(`https://pokeapi.co/api/v2/pokemon/${(pokeInput.value).toLowerCase()}`);

    promiseResponse.then(function(response) {
        if (!response.ok) {
            nome.textContent = "Por favor, digite um nome válido!";
            imagem.src = '';
            imagem.alt = '';
            habilidades.textContent = '';
            return;
        }

        

        const promiseBody = response.json();

        promiseBody.then(function(body) {
            console.log(body)
            nome.textContent = (body.name).toUpperCase();
            imagem.src = body.sprites.front_default;
            imagem.alt = body.name;

            const listaDeHabilidades = [];
            for (let habilidade of body.abilities) {
                listaDeHabilidades.push(habilidade.ability.name);
            }
            habilidades.textContent = `Habilidades: ${listaDeHabilidades}`;
        });
    });

    event.preventDefault();
});

