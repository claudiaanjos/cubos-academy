const botao = document.querySelector('button');
const recomendacao = document.querySelector('.inputMusica');
const generos = document.querySelectorAll('option');
const input = document.querySelector('#musica');

botao.addEventListener('click', () => {
    recomendacao.style.display = 'block';

    for (let genero of generos) {
        if (genero.value === "rock") {
            input.value = `Enter Sandman of Metallica`;
        } else if (genero.value === "kpop") {
            input.value = `Sorry, Sorry of Super Junior`;
        } else if (genero.value === "classica") {
            input.value = `The Cello Song`;
        }
    }
});