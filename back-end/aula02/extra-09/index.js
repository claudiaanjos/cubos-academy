const nota = 8.5;

if (nota >= 9){
    console.log("O estudante obteve conceito A")
} else if(nota < 9 && nota >= 8){
    console.log("O estudante obteve conceito B")
} else if(nota < 7 && nota >= 6){
    console.log("O estudante obteve conceito C")
} else if(nota < 6 && nota >= 4){
    console.log("O estudante obteve conceito D")
} else {
    console.log("O estudante obteve conceito E")
}
