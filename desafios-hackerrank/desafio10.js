function solucao(produtos) {
    totaltop = 0
    somatudo = 0
    for (let item of produtos) {
      if (item.preco > 10000) {
        let top = item.preco
        totaltop = totaltop + top
    }
      let tudo = item.preco
      somatudo = somatudo + tudo
    }
    let porcentagem = totaltop / somatudo
    let resultado = {
        totalTop: totaltop,
        percentual: porcentagem
    }
    console.log(resultado)   
}