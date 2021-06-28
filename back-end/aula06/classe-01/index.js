const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro']

const novasCidades = cidades.filter(x => x.length <= 8)

console.log(novasCidades)
