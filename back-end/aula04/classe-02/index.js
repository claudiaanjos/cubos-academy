const carro = {
    ligado: false,
    velocidade: 0,

    ligar: function () {
        if (this.ligado) {
            return "Este carro já está ligado."
        } else {
            this.ligado = true
            return `Carro ligado. Velocidade: ${this.velocidade}.`
        }
    },

    desligar: function () {
        if (!this.ligado) {
            return "Este carro já está desligado."
        } else {
            this.ligado = false
            this.velocidade = 0
            return `Carro desligado. Velocidade: ${this.velocidade}.`
        }
    },

    acelerar: function () {
        if(!this.ligado) {
            return "Não é possível acelerar um carro desligado."
        } else {
            this.velocidade += 10
            return `Carro ligado. Velocidade: ${this.velocidade}.`
        }
    },

    desacelerar: function () {
        if(!this.ligado) {
            return "Não é possível desacelerar um carro desligado."
        } else {
            this.velocidade -= 10
            return `Carro ligado. Velocidade: ${this.velocidade}.`
        }
    }
}

console.log(carro.desligar())
console.log(carro.ligar())
console.log(carro.ligar())
console.log(carro.acelerar())
console.log(carro.acelerar())
console.log(carro.desacelerar())
console.log(carro.desligar())
console.log(carro.acelerar())
console.log(carro.desacelerar())



// Outra Resolução

// definição do objeto carro solicitada
const carro = {
    // propriedade velocidade numérica
    velocidade: 0,

    // propriedade ligado boolean
    ligado: false,

    // método ligar
    ligar: function () {
        // SE propriedade ligado é true (carro já ligado)
        if (this.ligado) {
            // imprime mensagem carro já ligado
            console.log('Este carro já está ligado.');
            // SE não (se carro está desligado)
        } else {
            // altera propriedade ligado para true
            this.ligado = true;

            // variavel statusTexto para receber string "ligado" /
            // "desligado" dependendo da propriedade boolean ligado
            // (utilização de ternário para definir valor)
            let statusTexto = this.ligado ? "ligado" : "desligado";

            // imprime mensagem de status e velocidade usando
            // template string, variavel statusTexto e propriedade velocidade
            console.log(`Carro ${statusTexto}! Velocidade: ${carro.velocidade}.`);
        }
    },

    // método desligar
    desligar: function () {
        // SE propriedade ligado NÃO é true (carro já desligado)
        if (!this.ligado) {
            // imprime mensagem carro já desligado
            console.log('Este carro já está desligado.');
            // SE não (se carro está ligado)
        } else {
            // altera propriedade ligado para false
            this.ligado = false;

            // altera propriedade velocidade para zero
            this.velocidade = 0;

            // variavel statusTexto para receber string "ligado" /
            // "desligado" dependendo da propriedade boolean ligado
            // (utilização de ternário para definir valor)
            let statusTexto = this.ligado ? "ligado" : "desligado";

            // imprime mensagem de status e velocidade usando
            // template string, variavel statusTexto e propriedade velocidade
            console.log(`Carro ${statusTexto}! Velocidade: ${carro.velocidade}.`);
        }
    },

    // método acelerar
    acelerar: function () {
        // SE propriedade ligado NÃO é true (carro desligado)
        if (!this.ligado) {
            // imprime mensagem não acelera desligado
            console.log('Não é possível acelerar um carro desligado.');
            // SE não (se carro está ligado)
        } else {
            // aumenta o valor de velocidade em 10
            this.velocidade += 10;

            // variavel statusTexto para receber string "ligado" /
            // "desligado" dependendo da propriedade boolean ligado
            // (utilização de ternário para definir valor)
            let statusTexto = this.ligado ? "ligado" : "desligado";

            // imprime mensagem de status e velocidade usando
            // template string, variavel statusTexto e propriedade velocidade
            console.log(`Carro ${statusTexto}! Velocidade: ${carro.velocidade}.`);
        }
    },

    // método desacelerar
    desacelerar: function () {
        // SE propriedade ligado NÃO é true (carro desligado)
        if (!this.ligado) {
            // imprime mensagem não desacelera desligado
            console.log('Não é possível desacelerar um carro desligado.');
            // SE não (se carro está ligado)
        } else {
            // diminui valor de velocidade em 10 
            this.velocidade -= 10;

            // variavel statusTexto para receber string "ligado" /
            // "desligado" dependendo da propriedade boolean ligado
            // (utilização de ternário para definir valor)
            let statusTexto = this.ligado ? "ligado" : "desligado";

            // imprime mensagem de status e velocidade usando
            // template string, variavel statusTexto e propriedade velocidade
            console.log(`Carro ${statusTexto}! Velocidade: ${carro.velocidade}.`);
        }
    }
}

// Abaixo serão executados cada um dos métodos do objeto carro
// conforme (na ordem) solicitado pelo exercício
carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();


