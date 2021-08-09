function funcaoA(data) {
    const options = { year: 'numeric', month: 'long', day: '2-digit' };
    return data.toLocaleDateString('pt-BR', options);
}

function funcaoB(data) {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return data.toLocaleDateString('pt-BR', options);
}

function funcaoC(data) {
    const optionsMonth = { month: 'short' };

    return `${data.getDate()} ${data.toLocaleDateString('pt-BR', optionsMonth).substr(0,3)}`;
}

function funcaoD(data) {
    const optionsDate = { day: "2-digit" };
    const optionsMonth = { month: 'short' };

    return `${data.toLocaleDateString('pt-BR', optionsDate)} ${data.toLocaleDateString('pt-BR', optionsMonth).substr(0,3)} ${data.getFullYear()}`;
}

function funcaoE(data) {
    const optionsDate = { day: "2-digit" };
    const optionsMonth = { month: 'short' };

    return `${data.toLocaleDateString('pt-BR', optionsDate)} de ${data.toLocaleDateString('pt-BR', optionsMonth).substr(0,3)} de ${data.getFullYear()}`;
}

function funcaoF(data) {
    const optionsDate = { day: "2-digit" };
    const optionsMonth = { month: 'short' };

    return `${data.toLocaleDateString('pt-BR', optionsDate)}/${data.toLocaleDateString('pt-BR', optionsMonth).substr(0,3)}`;
}

const dataTeste = new Date(2020,9,5);

console.log(`a) ${funcaoA(dataTeste)}`);
console.log(`b) ${funcaoB(dataTeste)}`);
console.log(`c) ${funcaoC(dataTeste)}`);
console.log(`d) ${funcaoD(dataTeste)}`);
console.log(`e) ${funcaoE(dataTeste)}`);
console.log(`f) ${funcaoF(dataTeste)}`);