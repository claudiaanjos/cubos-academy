const cepInput = document.querySelector('#cep');
const cidadeInput = document.querySelector('#cidade');
const ruaInput = document.querySelector('#rua');

cepInput.addEventListener('change', function () {
    if(!cepInput) {
        alert("Por favor, preencha o campo do CEP.");
        return;
    }

    if(cepInput.value.length !== 8) {
        alert("O campo CEP deve conter 8 números.");
        return;
    }


    const promiseResponse = fetch(`https://viacep.com.br/ws/${cepInput.value}/json/`);

    promiseResponse.then(function(response) {
        const promiseBody = response.json();

        promiseBody.then(function(body) {
            if (body.erro) {
                alert("Por favor, digite um CEP válido.");
                return;
            }

            cidadeInput.value = body.localidade;
            ruaInput.value = body.logradouro;
        });
    });
});