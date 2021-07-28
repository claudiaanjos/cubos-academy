const imagem = document.querySelector('img');
const card = document.querySelector('.container');

imagem.addEventListener('click', compartilhar);

function compartilhar () {
    card.style.display = 'block';
}
