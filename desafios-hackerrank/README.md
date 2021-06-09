# Desafios HackerRank da Cubos Academy

### Os desafios fizeram parte do processo seletivo para o programa de formação da Cubos Academy em parceria com o iFood.
<br>

### [Desafio 01](#d1) 

### [Desafio 02](#d2)

### [Desafio 03](#d3)

### [Desafio 04](#d4)

### [Desafio 05](#d5)

### [Desafio 06](#d6)

### [Desafio 07](#d7)

### [Desafio 08](#d8)

### [Desafio 09](#d9)

### [Desafio 10](#d10)

<br>
<hr>
<br>

### <a name='d1'>**Desafio 01**</a>
<br>
Realizar um programa que informa se a pessoa pode entrar ou deve ser barrada em uma festa. 

Instruções: 

A entrada do problema será sempre uma variável idade do tipo number. Essa idade é sempre um número inteiro e positivo. Você deve imprimir na tela PODE ENTRAR caso a pessoa seja maior de idade (ou seja, tenha 18 anos ou mais). Caso a pessoa seja menor de idade imprima na tela ACESSO NEGADO.
<br>
<br>
### <a name='d2'>**Desafio 02**</a>
<br>
Realizar um programa que identifica se uma foto foi tirada no modo retrato, paisagem ou se a foto é quadrada.

Instruções:

A entrada será sempre composta de duas variáveis largurae altura que serão números inteiros e positivos. Imprima na tela RETRATO caso a altura seja maior que a largura. Imprima na tela PAISAGEM caso a largura seja maior que a altura. Imprima na tela QUADRADA caso a largura e altura sejam iguais.
<br>
<br>
### <a name='d3'>**Desafio 03**</a>
<br>
Realizar um programa que determine quem é o vencedor de um jogo de papel-pedra-tesoura ou informar se houve um empate.

Instruções:

A entrada será sempre composta por dois parâmentos:


- joao: variável que contém um string, informando se ele jogou PEDRA, PAPEL ou TESOURA;
- andre: variável que contém um string, informando se ele jogou PEDRA, PAPEL ou TESOURA.


Imprima na tela se o vencedor do jogo foi JOAO ou ANDRE. Caso o jogo dê empate, imprima EMPATE. Utilize sempre em maiúsculas para essas strings e sem acentuação.
<br>
<br>
### <a name='d4'>**Desafio 04**</a>
<br>
Realizar um programa que, dado um número a partir do qual deve-se começar uma contagem regressiva, imprima na tela a contagem regressiva desse número até 0. Ao final da contagem imprima a mensagem KABUM.

Instruções:

A entrada será sempre um número positivo a partir do qual deve-se começar a contagem regressiva. Imprima na tela a contagem regressiva, colocando cada número da contagem em uma linha, incluindo o valor inicial fornecido na entrada e o zero. Na última linha, deve estar sempre a palavra KABUM.
<br>
<br>
### <a name='d5'>**Desafio 05**</a>
<br>
Realizar um programa para um cinema, que indica se uma pessoa pode ter acesso ao filme. Além disso, o programa verifica se a pessoa tem direito a meia entrada ou se o ingresso deve ser inteira. 

Para ter acesso ao filme, a pessoa deve atender os seguintes requisitos: ter ingresso, ter idade igual ou superior a censura ou estar acompanhada dos pais. Uma vez determinado que a pessoa pode ter acesso, é necessário verificar se ela tem direito a meia. Para isso, ela precisa atender a pelo menos uma das condições: ter carteirinha de estudante e ter menos de 18 anos.

Instruções:

A entrada será sempre um objeto, com os dados necessários para a análise, no seguinte formato:

<pre><code>{
    temIngresso: true,
    idade: 23,
    temCarteirinha: true,
    censura: 16,
    estaComPais: false
}
</code></pre>

A saída deverá ser sempre uma das três opções:


- ACESSO NEGADO caso a pessoa não possa ter acesso ao filme;
- INTEIRA caso a pessoa tenha acesso ao filme mediante apresentação de ingresso de inteira;
- MEIA caso a pessoa tenha acesso ao filme mediante apresentação de ingresso de meia entrada.
<br>
<br>
### <a name='d6'>**Desafio 06**</a>
<br>
Realizar um programa para um aplicativo de mobilidade que calcula o valor a pagar do usuário.

Caso a viagem seja muito curta, ou seja, dure menos de 05 minutos, a corrida custará R$6,00 reais, indepententemente da distância percorrida.

Caso a viagem seja média, ou seja, dure entre 05 minutos e uma hora, a viagem custará R$1 real por minuto mais R$0,50 centavos por quilômetro percorrido. 

Para viagens mais longas, que durem mais de uma hora, o preço da viagem deixa de depender do tempo e passa a depender apenas da distância percorrida. Neste caso, a viagem custará: R$2,00 reais por quilômetro, caso a distância seja menor que 100km e; R$1,50 reais por quilômetro, caso a distância seja 100km ou mais.

Instruções:

A entrada será composta por dois parâmetros: tempo sempre dado em minutos e distância sempre dada em quilômetros. Imprima na tela o preço total a ser pago pelo usuário, EM CENTAVOS. Lembre-se de que 1 real equivalem a 100 centavos.
<br>
<br>
### <a name='d7'>**Desafio 07**</a>
<br>
Realizar um programa que determina se num dado ano haverá jogos olímpicos, copa do mundo ou se vai ser um ano meio MEH. Sem graça.

Instruções:

A entrada será sempre um número inteiro e positivo maior que 2021 representando o ano que se deseja saber se terá Copa do Mundo, Olimpíadas, ou se será um ano MEH. Imprima na tela COPA caso no ano dado haja copa do mundo; JOGOS caso no ano dado haja olimpíadas e MEH caso no ano dado não haja nem copa do mundo nem olimpíadas.
<br>
<br>
### <a name='d8'>**Desafio 08**</a>
<br>
Realizar um programa que calcule quantas crianças perderam na rodada do jogo ABC.

O jogo ABC é uma brincadeira muito comum entre crianças. Nessa brincadeira, uma letra é sorteada a cada rodada e cada criança que está brincando deve escrever uma palvra de uma determinada categoria que comece com a letra que foi sorteada.

Por exemplo, caso a letra sorteada seja a letra "M" e o tema seja "frutas" as crianças podem falar coisas como: melancia, melão, maçã, mamão e todas essas respostas estariam corretas, pois começam com a letra M. Porém caso uma criança falasse "Laranja", por exemplo, essa criança teria perdido.

Instruções:

A entrada terá sempre duas variáveis:


- letra, que contém a letra que foi sorteada para essa rodada (sempre minúscula e sem acentos);
- palavras, que será sempre um array de strings contendo as palavras que cada uma das crianças escreveu (sempre minúsculas e sem acento).

Imprima na tela apenas um número inteiro contendo a quantidade de crianças que PERDERAM nessa rodada.
<br>
<br>
### <a name='d9'>**Desafio 09**</a>
<br>
Realizar um programa para uma loja que está com um estoque muito grande acumulado e que resolveu fazer uma promoção para que os clientes levem mais produtos. 

Caso o cliente compre 5 ou mais produtos, o mais barato deles sairá de graça!

Instruções:

A entrada será sempre um array contendo apenas números inteiros e positivos representando o valor de cada um dos produtos (em centavos). Imprima na tela apenas um número que representa o total que deve ser pago pelo cliente (aplicando a promoção quando fizer sentido, claro).
<br>
<br>
### <a name='d10'> **Desafio 10**</a>
<br>
Realizar um programa que calcule as informações pedidas por uma loja.

Na loja são vendidos os mais diferentes tipos de produtos e os que custam mais de 100 reais são considerados TOP DE LINHA. O gerente da loja quer saber duas coisas:


- Quantos reais a empresa faturou através da venda de produtos TOP DE LINHA;
- Quantos % do faturamento total da empresa a venda de produtos TOP DE LINHA representa.

Instruções: 

A entrada será sempre um array contendo vários objetos. Cada objeto representa um produto (que pode ou não ser TOP DE LINHA). Assim a entrada será como no exemplo abaixo:

<pre><code>[
{
    nome: "Camiseta",
    preco: 7000 // em centavos
},
{
    nome: "Tenis",
    preco: 8000 // em centavos
},
{
    nome: "Relogio",
    preco: 15000 // em centavos
}
]
</code></pre>

Lembre-se sempre que os valores monetários são sempre em centavos, para que fiquem representados como números inteiros.

Imprima na tela apenas um objeto no formato abaixo (chame console.log() passando como argumento a variável que armazena o seu objeto de resposta):

<pre><code>{
    totalTop: 15000,
    percentual: 0.5
}
</code></pre>