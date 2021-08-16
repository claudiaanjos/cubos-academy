const criptoInput = document.querySelector("#cripto");
const valorNegociado = document.querySelector(".valor-negociado");
const quantidade = document.querySelector(".quantidade");
const valorCompra = document.querySelector(".valor-compra");



criptoInput.addEventListener('change', function() {
    if (!criptoInput.value) {
        return;
    }

    if (criptoInput.value === 'none') {
        valorNegociado.classList.add('oculto');
        valorCompra.classList.add('oculto');
        quantidade.classList.add('oculto');
    }

    const promiseResposta = fetch(`https://www.mercadobitcoin.net/api/${cripto.value}/ticker/`);

    promiseResposta.then(function(resposta) {
        const promiseBody = resposta.json();

        promiseBody.then(function (body) {
            valorNegociado.classList.remove('oculto');
            valorNegociado.textContent = Number(body.ticker.high).toFixed(2).toString().replace(".", ",");

            quantidade.classList.remove('oculto');
            quantidade.textContent = Number(body.ticker.vol).toFixed(0);

            valorCompra.classList.remove('oculto');
            valorCompra.textContent = Number(body.ticker.buy).toFixed(2).toString().replace(".", ",");

        });
    });
});