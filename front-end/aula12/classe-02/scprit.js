const senha = document.querySelector('#senha');
const senhaRepetida = document.querySelector('#repita-senha');
const botao = document.querySelector('button');
const aviso = document.querySelector('p');

botao.addEventListener('click', (event) => {
    if (senha.value !== senhaRepetida.value) {
        event.preventDefault();
        aviso.innerHTML = `As senhas devem coincidir!`;
    }
});
