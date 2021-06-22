const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valorEmCentavos) {
        this.saldo += valorEmCentavos
        this.historicos.push({tipo: "Depósito", valor: valorEmCentavos})
        return `Depósito de R$ ${(valorEmCentavos/100).toFixed(2)} realizado para o cliente: ${this.nome}.`
    },
    sacar: function (valorEmCentavos) {
        if (valorEmCentavos > this.saldo) {
            return `Saldo insuficiente para o saque de: ${this.nome}.`
        } else {
            this.saldo -= valorEmCentavos
            this.historicos.push({ tipo: "Saque", valor: valorEmCentavos })
            return `Saque de R$ ${(valorEmCentavos / 100).toFixed(2)} realizado para o cliente: ${this.nome}.`
        }  
    },
    extrato: function () {
        let deposito = 0
        let saque = 0
        for (let item of this.historicos) {
            if (item.tipo === "Depósito") {
                deposito += item.valor
            } else if (item.tipo === "Saque") {
                saque += item.valor
            }
        }
        return `Extrato de ${this.nome} - Saldo: R$ ${(this.saldo/100).toFixed(2)} \nHistórico: \nDepósito de R$ ${(deposito/100).toFixed(2)} \nSaque de R$ ${(saque/100).toFixed(2)}`
    }
}



console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());