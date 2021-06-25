const celular = 99918888;

let celularString = celular.toString()

if (celularString.length === 10) {
    console.log(`(${celularString.slice(0,2)}) 9 ${celularString.slice(2,6)}-${celularString.slice(6,11)}`)
} else if (celularString.length === 8) {
    console.log(`9 ${celularString.slice(0, 4)}-${celularString.slice(4, 9)}`)
} else {
    console.log("Digite um número válido")
}