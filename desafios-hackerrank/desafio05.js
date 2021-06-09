function solucao(obj) {
    let podeEntrar = obj.temIngresso == true && obj.idade >= obj.censura;
    let podeEntrarMenor = obj.temIngresso == true && obj.estaComPais == true;
    
    if (podeEntar || podeEntrarMenor) {
        if (obj.temCarteirinha == true || obj.idade < 18) {
        console.log ("MEIA");
      } else {
        console.log ("INTEIRA");
      }
    } else {
      console.log ("ACESSO NEGADO");
    }
}