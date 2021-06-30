const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];


let maiorString = cidades.reduce((acc, item) => item.length > acc.length ? item : acc)


console.log(maiorString)