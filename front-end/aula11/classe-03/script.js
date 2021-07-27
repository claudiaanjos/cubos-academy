const imagens = document.querySelectorAll('.imagens img');
const imagemModal = document.querySelector('.modal img');
const modal = document.querySelector('.modal');
const linkModal = document.querySelector('.modal a');

//Abrir o modal
imagens.forEach(imagem => {
    imagem.addEventListener('click', (event) => {
        abrirModal(event.target.src);
    });
});

//Fechar o modal
modal.addEventListener('click', () => {
    modal.style.display = 'none';
});

//Evitar o efeito de fechar o modal quando clicar na imagem
linkModal.addEventListener('click', function (event) {
    event.stopPropagation();
    linkModal.target = "_blanck";
});


//Funções
function abrirModal (src) {
    imagemModal.src = src;
    modal.style.display = 'flex';
    linkModal.href = src;
}





