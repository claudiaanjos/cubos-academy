const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";

console.log(`O livro está na posição ${livros.indexOf(nomeDoLivro) + 1}`)


// Outra Resolução

const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";

const livroSolicitado = livros.indexOf(nomeDoLivro) + 1;

console.log(`o livro está na posição ${livroSolicitado}`);