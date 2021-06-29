const email = "aluno@cubos.academy";

if (email.includes("@") && email.lastIndexOf(".") !== (email.length - 1) && email.indexOf(".") !== 0) {
    console.log("E-mail válido")
} else {
    console.log("E-mail inválido")
}


// Outra resolução

function validarEmail(email) {
    let valido = true;

    if (email.indexOf("@") < 0) {
        valido = false;
    }

    if (email.indexOf(".") < 0) {
        valido = false;
    }

    if (email.indexOf(".") === 0) {
        valido = false;
    }

    if (email.lastIndexOf(".") === email.length - 1) {
        valido = false;
    }

    if (valido) {
        console.log("E-mail válido");
    } else {
        console.log("E-mail inválido");
    }
}

validarEmail("jose@cubos.academy");
validarEmail("jose@cubos.academy.br");
validarEmail("jose.messias@cubos.academy");
validarEmail("jose.messias@cubos.io");
validarEmail("jose@cubos");
validarEmail("jose.messias@cubos");
validarEmail("jose.messias@.");
validarEmail("jose.@cubos");
validarEmail(".@");
validarEmail("@.");
validarEmail("jose.messias@cubos.");
validarEmail(".messias@cubos.");
validarEmail(".messias@cubos");