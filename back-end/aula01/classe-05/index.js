function distancia (x1, x2, y1, y2){
    let potenciax = (x2-x1)**2
    let potenciay = (y2-y1)**2
    let distancia = Math.sqrt(potenciax + potenciay)
    return distancia
}


