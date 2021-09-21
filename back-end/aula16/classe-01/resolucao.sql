-- 01
SELECT COUNT(*) AS total FROM farmacia;

-- 02
SELECT MIN(idade) FROM usuarios;

-- 03
SELECT MAX(idade) FROM usuarios;

-- 04
SELECT ROUND(AVG(idade)) FROM usuarios WHERE idade >= 18;

-- 05
SELECT SUM(estoque) FROM farmacia WHERE categoria = 'blue' OR categoria = 'black';

-- 06
SELECT SUM(estoque), categoria FROM farmacia WHERE categoria IS NOT NULL GROUP BY categoria;

-- 07
SELECT SUM(estoque) FROM farmacia WHERE categoria IS NULL;

-- 08
SELECT COUNT(*) FROM farmacia WHERE categoria IS NULL;

-- 09
SELECT CONCAT(medicamento, ' (', categoria, ')') FROM farmacia WHERE categoria IS NOT NULL;

-- 10
SELECT CONCAT(id, ' - ', medicamento, ' (', COALESCE(categoria, 'sem categoria'), ')') FROM farmacia ORDER BY categoria;

-- 11
SELECT nome, idade, CAST(cadastro AS date) FROM usuarios WHERE cadastro BETWEEN '2020-01-01' AND '2020-12-31';

-- 12
SELECT nome, idade, email, AGE(CAST(cadastro AS timestamp)) FROM usuarios WHERE idade < 18;

-- 13
SELECT nome, idade, email, AGE(CAST(cadastro AS date)) FROM usuarios WHERE idade >= 60;

-- 14
SELECT COUNT(*), categoria FROM farmacia WHERE categoria IS NOT NULL GROUP BY categoria;

-- 15
SELECT idade, COUNT(*) FROM usuarios WHERE idade >= 18 GROUP BY idade;

-- 16
SELECT categoria, SUM(estoque) FROM farmacia WHERE categoria IS NOT NULL GROUP BY categoria ORDER BY SUM(estoque) DESC LIMIT 3;
