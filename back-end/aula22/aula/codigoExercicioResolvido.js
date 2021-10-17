// 1 - Faça uma query que retorna a quantidade de medicamentos da tabela`farmacia`.
const quantidadeMedicamentos = await knex('farmacia').count();

// 2 - Faça uma query que retorna apenas a idade do usuario mais novo cadastrado na tabela`usuarios`.
const usuarioMaisNovo = await knex('usuarios').min('idade').debug();

// 3  - Faça uma query que retorna todas as categorias não nulas e a soma do estoque 
// de todos os medicamentos de cada categoria na tabela`farmacia`.
const somaCategoria = await knex('farmacia')
    .select('categoria')
    .sum('estoque')
    .whereNotNull('categoria')
    .groupBy('categoria')
    .debug();

// 4 - Faça uma query que retorna a quantidade de medicamentos sem categoria na tabela`farmacia`.
const categoriaNull = await knex('farmacia')
    .whereNull('categoria')
    .count()
    .debug();

// 5 - Faça uma query que retorna a categoria e a quantidade de produtos de cada 
// categoria que não seja nula da tabela`farmacia`.
const quantidadeCategoria = await knex('farmacia')
    .select('categoria')
    .count()
    .whereNotNull('categoria')
    .groupBy('categoria')
    .debug();

// 6 - Faça uma query que retorna a idade e a quantidade de registros de 
// cada idade, onde a idade seja maior ou igual a 18 anos, na tabela`usuarios`.
const quantidadeUsuario = await knex('usuarios')
    .select('idade')
    .count()
    .where('idade', '>=', 18)
    .groupBy('idade')
    .debug();











