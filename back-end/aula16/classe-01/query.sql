-- 01
SELECT COUNT(medicamento) FROM farmacia;

-- 02
SELECT MIN(idade) FROM usuarios; 

-- 03
SELECT MAX(idade) FROM usuarios; 

-- 04
SELECT ROUND(AVG(idade), 2) FROM usuarios WHERE idade >= 18;

-- 05
SELECT SUM(estoque) FROM farmacia WHERE categoria IN ('blue', 'black');

-- 06
SELECT SUM(estoque) FROM farmacia WHERE categoria IS NOT NULL;

-- 07
SELECT SUM(estoque) FROM farmacia WHERE categoria IS NULL;

-- 08
SELECT COUNT(estoque) FROM farmacia WHERE categoria IS NULL;

-- 09
SELECT CONCAT(medicamento, ' (', categoria, ')') AS novaColuna FROM farmacia WHERE categoria IS NOT NULL;

-- 10
SELECT CONCAT(id, ' - ', medicamento, ' (', COALESCE(categoria, 'sem categoria'), ')') FROM farmacia;

-- 11
SELECT nome, idade, CAST(cadastro AS date) FROM usuarios WHERE EXTRACT(YEAR FROM CAST(cadastro AS date)) = EXTRACT(YEAR FROM date '2020-01-01');

-- 12
SELECT nome, idade, email, AGE(CAST(cadastro AS date)) FROM usuarios WHERE idade < 18;

-- 13
SELECT nome, idade, email, AGE(CAST(cadastro AS date)) FROM usuarios WHERE idade >= 60;

-- 14
SELECT categoria, COUNT(estoque) FROM farmacia WHERE categoria IS NOT NULL GROUP BY categoria;

-- 15
SELECT idade, COUNT(*) AS quantidade FROM usuarios WHERE idade >= 18 GROUP BY idade;

-- 16
SELECT categoria, SUM(estoque) FROM farmacia WHERE categoria IS NOT NULL GROUP BY categoria LIMIT 3;
