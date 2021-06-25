const email = "aluno@cubos.academy";

if (email.includes("@") && email.lastIndexOf(".") !== (email.length - 1) && email.indexOf(".") !== 0) {
    console.log("E-mail válido")
} else {
    console.log("E-mail inválido")
}

