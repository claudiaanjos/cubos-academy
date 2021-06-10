function calcula (diametro){
    let raio = Math.sqrt(diametro)
    let volume = (4/3)*Math.PI*(raio**3)
    return `O volume de uma esfera de raio ${raio} é ${volume}.`
}


