// ITEM B

const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],

    // definição do método depositar
    depositar: function (valor) {

    }
}

// ITEM C

const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],

    // definição do método depositar
    depositar: function (valor) {
        // acrescenta o valor do argumento no saldo
        this.saldo += valor;
        // adiciona um objeto no formato solicitado
        // no array historicos
        this.historicos.push({
            tipo: "Depósito",
            valor
        });
        // imprime a mensagem de que o depósito foi realizado
        // mostrando o valor e nome do cliente
        console.log(`Deposito de R$ ${valor / 100} realizado para o(a) cliente: ${this.nome}.`);
    }
}

// executa o método depositar da contaBancaria
contaBancaria.depositar(10000);


// ITEM D

const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],

    depositar: function (valor) {
        this.saldo += valor;
        this.historicos.push({
            tipo: "Depósito",
            valor
        });
        console.log(`Deposito de R$ ${valor / 100} realizado para o(a) cliente: ${this.nome}.`);
    },

    // definição do método sacar
    sacar: function (valor) {

    }
}


// ITEM E

const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],

    depositar: function (valor) {
        this.saldo += valor;
        this.historicos.push({
            tipo: "Depósito",
            valor
        });
        console.log(`Deposito de R$ ${valor / 100} realizado para o(a) cliente: ${this.nome}.`);
    },

    // definição do método sacar
    sacar: function (valor) {
        // SE valor do argumento é maior que saldo da conta
        if (valor > this.saldo) {
            // imprime mensagem saldo insuficiente
            console.log(`Saldo insuficiente para o saque de: ${this.nome}.`);
            // return; para finalizar a execução da função
            return;
        }

        // subtrai valor do argumento do saldo
        this.saldo -= valor;
        // acrescenta novo objeto de histórico
        // no array historicos
        this.historicos.push({
            tipo: "Saque",
            valor
        });
        // imprime mensagem confirmando que o
        // saque foi realizado
        console.log(`Saque de R$ ${valor / 100} realizado para o(a) cliente: ${this.nome}.`);
    }
}

// executa método depositar para criar saldo
contaBancaria.depositar(10000);
// executa saque de metade do valor com sucesso
contaBancaria.sacar(5000);
// executa saque de valor para saldo insuficiente
contaBancaria.sacar(8000);



// ITEM F

const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],

    depositar: function (valor) {
        this.saldo += valor;
        this.historicos.push({
            tipo: "Depósito",
            valor
        });
        console.log(`Deposito de R$ ${valor / 100} realizado para o(a) cliente: ${this.nome}.`);
    },

    sacar: function (valor) {
        if (valor > this.saldo) {
            console.log(`Saldo insuficiente para o saque de: ${this.nome}.`);
            return;
        }

        this.saldo -= valor;
        this.historicos.push({
            tipo: "Saque",
            valor
        });
        console.log(`Saque de R$ ${valor / 100} realizado para o(a) cliente: ${this.nome}.`);
    },

    extrato: function () {

    }
}


// ITEM G

const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],

    depositar: function (valor) {
        this.saldo += valor;
        this.historicos.push({
            tipo: "Depósito",
            valor
        });
        console.log(`Deposito de R$ ${valor / 100} realizado para o(a) cliente: ${this.nome}.`);
    },

    sacar: function (valor) {
        if (valor > this.saldo) {
            console.log(`Saldo insuficiente para o saque de: ${this.nome}.`);
            return;
        }

        this.saldo -= valor;
        this.historicos.push({
            tipo: "Saque",
            valor
        });
        console.log(`Saque de R$ ${valor / 100} realizado para o(a) cliente: ${this.nome}.`);
    },

    // definição do método extrato
    extrato: function () {
        // imprime a linha inicial com nome e saldo
        console.log(`Extrato de ${this.nome} - Saldo: R$ ${this.saldo / 100}`);
        // imprime o título do Histórico
        console.log("Histórico:");
        // percorre todos os objetos do array historicos
        // para imprimir cada um deles
        for (let historico of this.historicos) {
            // imprime o tipo e o valor do historico
            console.log(`${historico.tipo} de R$ ${historico.valor / 100}`);
        }
    }
}

// executa método depositar para criar saldo e histórico
contaBancaria.depositar(10000);
// executa método sacar da metade do valor e para criar
// mais um histórico
contaBancaria.sacar(5000);
// executa método extrato mostrando saldo e históricos
contaBancaria.extrato();


// ITEM H

const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],

    depositar: function (valor) {
        this.saldo += valor;
        this.historicos.push({
            tipo: "Depósito",
            valor
        });
        console.log(`Deposito de R$ ${valor / 100} realizado para o(a) cliente: ${this.nome}.`);
    },

    sacar: function (valor) {
        if (valor > this.saldo) {
            console.log(`Saldo insuficiente para o saque de: ${this.nome}.`);
            return;
        }

        this.saldo -= valor;
        this.historicos.push({
            tipo: "Saque",
            valor
        });
        console.log(`Saque de R$ ${valor / 100} realizado para o(a) cliente: ${this.nome}.`);
    },

    extrato: function () {
        console.log(`Extrato de ${this.nome} - Saldo: R$ ${this.saldo / 100}`);
        console.log("Histórico:");
        for (let historico of this.historicos) {
            console.log(`${historico.tipo} de R$ ${historico.valor / 100}`);
        }
    }
}

// abaixo serão executados os métodos na ordem
// solicitada pelo enunciado do exercício
contaBancaria.depositar(10000);
contaBancaria.sacar(50000);
contaBancaria.sacar(5000);
contaBancaria.extrato();