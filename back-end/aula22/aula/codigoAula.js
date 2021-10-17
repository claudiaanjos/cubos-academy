//Seleção de toda tabela

// Podemos usar o debug para ver no terminal 
// qual o código sql ao qual se refere a linha do knex
// const agenda = await knex('agenda').debug();

// Podemos também escrever de outra forma (bruta)
// const agenda = await knex.raw('select * from agenda');

// Quero o registro onde o id=5 na tabela agenda
// const agenda = await knex('agenda').where('id', 5).debug();
// const agenda = await knex('agenda').where({ id: 5 }).debug();
// const agenda = await knex('agenda').where({ id: 5, nome: 'alguma coisa' }).debug();
// equivalente
// conexao.query('select * from agenda where id = $1', [5])

// Quero que o id seja diferente de 5
// const agenda = await knex('agenda').where('id', '!==', 5).debug();

// const agenda = await knex('agenda').select('id', 'nome').debug();

// Buscar o primeiro registro dentro da consulta
// const agenda = await knex('agenda').where({ id: 5 }).first().debug();

// Retornar o registro com alguns campos
// const agenda = await knex('agenda').where({ id: 5 }).select('id', 'nome').first().debug();

// Registros onde o campo email é null
// select * from agenda where email is null
// const agenda = await knex('agenda').whereNull('email').debug();

// select * from agenda where email is not null
// const agenda = await knex('agenda').whereNotNull('email').debug();

// select * from agenda where id between 5 and 10
// const agenda = await knex('agenda').whereBetween('id', [5, 10]).debug();
// const agenda = await knex('agenda').whereBetween('id', [5, 10]).orderBy('id', 'desc').debug();

// Listagem com todos os registros que não se repetem de email e nome
// const agenda = await knex('agenda').distinct('email', 'nome').debug();

// select email, count(*) from agenda group by email
// const agenda = await knex('agenda').select('email').groupBy('email').count().debug();
// const agenda = await knex('agenda').limit(5).offset(2).debug();

// Quantidade de registros
// const agenda = await knex('agenda').whereNull('email').count().debug();

// Soma os valores de um campo que você especifica
// const agenda = await knex('agenda').whereNull('email').sum('id').debug();

// Avg - média
// const agenda = await knex('agenda').whereNull('email').avg('id').debug();

// const agenda = await knex('agenda').whereNull('email').min('id').debug();
// const agenda = await knex('agenda').whereNull('email').max('id').debug();