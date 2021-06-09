function solucao(joao, andre) {
    if (joao == "PEDRA" && andre == "TESOURA" || joao == "PAPEL" && andre == "PEDRA" || joao == "TESOURA" && andre == "PAPEL") {
    console.log ("JOAO");
  } else if (joao == "PEDRA" && andre == "PEDRA" || joao == "PAPEL" && andre == "PAPEL" || joao == "TESOURA" && andre == "TESOURA") {
    console.log ("EMPATE");
  } else {
    console.log ("ANDRE");
  }
}