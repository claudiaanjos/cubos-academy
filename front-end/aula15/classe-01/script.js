fetch('https://restcountries.eu/rest/v2/all').then(function(resposta) {
    const promiseBody = resposta.json();
    
    promiseBody.then(function(body) {
        console.log(body);
    });
});