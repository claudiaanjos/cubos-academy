ALTER TABLE IF EXISTS produtos DROP CONSTRAINT IF EXISTS produtos_categorias;

ALTER TABLE IF EXISTS pedidos DROP CONSTRAINT IF EXISTS pedidos_clientes;

ALTER TABLE IF EXISTS pedidos DROP CONSTRAINT IF EXISTS pedidos_vendedor;

ALTER TABLE IF EXISTS itens_do_pedido DROP CONSTRAINT IF EXISTS itens_do_pedido_pedidos;

ALTER TABLE IF EXISTS itens_do_pedido DROP CONSTRAINT IF EXISTS itens_do_pedido_produtos;

DROP TABLE IF EXISTS categorias;

CREATE TABLE categorias (
  id serial PRIMARY KEY,
  nome varchar(50)
);

DROP TABLE IF EXISTS produtos;

CREATE TABLE produtos (
  id serial PRIMARY KEY,
  nome varchar(100),
  descricao text,
  preco int,
  quantidade_em_estoque int,
  categoria_id int
);

DROP TABLE IF EXISTS clientes;

CREATE TABLE clientes (
  cpf char(11) UNIQUE,
  nome varchar(150)
);

DROP TABLE IF EXISTS vendedores;

CREATE TABLE vendedores (
  cpf char(11) UNIQUE,
  nome varchar(150)
);

DROP TABLE IF EXISTS pedidos;

CREATE TABLE pedidos (
  id serial PRIMARY KEY,
  valor int,
  cliente_cpf char(11),
  vendedor_cpf char(11)
);

DROP TABLE IF EXISTS itens_do_pedido;

CREATE TABLE itens_do_pedido (
  id serial PRIMARY KEY,
  pedido_id int,
  quantidade int,
  produto_id int
);

ALTER TABLE produtos ADD CONSTRAINT produtos_categorias FOREIGN KEY (categoria_id) REFERENCES categorias (id);

ALTER TABLE pedidos ADD CONSTRAINT pedidos_clientes FOREIGN KEY (cliente_cpf) REFERENCES clientes (cpf);

ALTER TABLE pedidos ADD CONSTRAINT pedidos_vendedor FOREIGN KEY (vendedor_cpf) REFERENCES vendedores (cpf);

ALTER TABLE itens_do_pedido ADD CONSTRAINT itens_do_pedido_pedidos FOREIGN KEY (pedido_id) REFERENCES pedidos (id);

ALTER TABLE itens_do_pedido ADD CONSTRAINT itens_do_pedido_produtos FOREIGN KEY (produto_id) REFERENCES produtos (id);