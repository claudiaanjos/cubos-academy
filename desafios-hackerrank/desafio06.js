function solucao(tempo, distancia) {
    let curta = tempo < 5; 
    let media = tempo >= 5 && tempo <= 60;
    let longa = tempo > 60;
    let valor;
    
    if (curta == true) {
      console.log ("600");
    } else if (media) {
      valor = (tempo * 100) + (distancia * 50);
      console.log(valor);
    } else if (longa) {
      if (distancia < 100) {
        valor = 200 * distancia;
        console.log(valor);
      } else if (distancia >= 100) {
        valor = 150 * distancia;
        console.log(valor);
      }
    }
}