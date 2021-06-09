function solucao(letra, palavras) {
    let cont = 0
    for (let i=0; i < palavras.length; i++) {
      if (letra != palavras[i][0]) {
        cont += 1
      }
    }
    console.log(cont)
}