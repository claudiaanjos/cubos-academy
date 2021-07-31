const botao = document.querySelector('button');
const recomendacao = document.querySelector('.inputMusica');
const input = document.querySelector('#musica');


botao.addEventListener('click', () => {
    recomendacao.style.display = 'block';
    
    if (genero.value === "rock") {
        input.value = `Enter Sandman Metallica`;
    } else if (genero.value === "kpop") {
        input.value = `Sorry, Sorry Super Junior`;
    } else if (genero.value === "classica") {
        input.value = `The Cello Song`;
    }
    
});