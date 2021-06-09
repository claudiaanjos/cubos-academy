function solucao(precos) {
    let total = 0;
    if (precos.length < 5) {
      for (let i=0 ; i < precos.length; i++) {
        total = total + precos[i];
      }
      console.log(total)
      } else if (precos.length >= 5) {
      let min = Math.min.apply(Math, precos);
      for (let i=0 ; i < precos.length; i++) {
        total = (total + precos[i]);
      }
      console.log (total-min)
    }     
}