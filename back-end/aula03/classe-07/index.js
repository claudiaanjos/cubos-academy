const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

//seu código aqui
if (aposentada || portadoraDeDoenca){
    console.log("ISENTA")
} else if (totalDeRendimentos <= (28559.70 * 100)){
    console.log("VAZA LEÃO! JÁ TÁ DIFÍCIL SEM VOCÊ")
} else {
    console.log("PEGA LEÃO")
}

