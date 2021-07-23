const botaoInscrever = document.querySelector('.btn');
const botoesModal = document.querySelectorAll('.modal button');
const botaoConfirmar = document.querySelector('.confirmar');
const modal = document.querySelector('.modal');


botaoInscrever.addEventListener('click', inscrever);

botoesModal.forEach( botao => {
    botao.addEventListener('click', function () {
        modal.classList.add('escondido');
    });
});


botaoConfirmar.addEventListener('click', function() {
    botaoInscrever.textContent = 'INSCREVER-SE';
    botaoInscrever.classList.remove('inscrito');

    botaoInscrever.addEventListener('click', inscrever);
    
});


function inscrever (event) {
    const botaoClicado = event.target;

    botaoClicado.textContent = "INSCRITO";
    botaoClicado.classList.add('inscrito');

    botaoClicado.removeEventListener('click', inscrever);

    botaoClicado.addEventListener('click', function () {
        modal.classList.remove('escondido');
    });
}