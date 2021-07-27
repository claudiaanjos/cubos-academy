const imagemDaSenha = document.querySelector('.olho');

imagemDaSenha.addEventListener('click', alterarImagem);



function alterarImagem (event) {
    let imagemClicada = event.target.src;
    let tiposDeImagem = ["aberto", "fechado"];
    let tiposInput = ["text", "password"];

    for (let i = 0; i < tiposDeImagem.length; i++) {
        if (imagemClicada === imagemDaSenha.src) {
            imagemDaSenha.src = `assets/olho-${tiposDeImagem[i]}.svg`;
            document.getElementById('password').type = `${tiposInput[i]}`;
        } 
    }

}

