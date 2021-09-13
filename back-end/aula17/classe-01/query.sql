--01
create table usuarios (
  id serial,
  nome text not null,
  idade smallint,
  email varchar(80),
  senha varchar(8) not null
);

--02
insert into usuarios 
(nome, idade, email, senha)
values
('Aretha Montgomery', 30, 'augue.id.ante@odioAliquam.com', 'a0B13O3L'),
('Camden H. Bartlett', 15, 'turpis.vitae.purus@risusDuisa.ca', 'p3P96F3Q'),
('Raja W. Coffey',	30,	'raja.feugiat@nonummy.com',	's5F51T7L'),
('Elton D. Olsen',	29,	'auctor@duiFuscediam.edu',	'k5X25B0R'),
('Shelley E. Frederick',	20,	'raja.feugiat@nonummy.com',	'u2D18F6E');


--03
update usuarios set nome = 'Raja W. Coffey Thomas' 
where email = 'raja.feugiat@nonummy.com';

--04
delete from usuarios where id = 5;
alter table usuarios add constraint emailunico unique(email);

--05
insert into usuarios
(nome, idade, email, senha)
values
('Jermaine G. Sellers',	16,	'ligula.Nullam@tortordictum.co.uk',	'o2P56U9U'),
('James D. Kennedy',	23,	'amet@Nulladignissim.com',	'q6B78V3V'),
('Amelia S. Harris',	29,	'nec.metus.facilisis@vitaealiquet.edu',	'l4S64Y3A'),
('Joel M. Hartman',	18,	'montes.nascetur@odiotristique.co.uk',	'c4Q27D7O'),
('Elmo K. Greer',	18,	'risus.Duis@eget.ca',	'e3P92I7R');

--06
alter table usuarios
add column situacao boolean default true;

--07
update usuarios set situacao = false 
where email = 'montes.nascetur@odiotristique.co.uk';

--08
update usuarios set senha = 'k9P31H1O'
where email = 'risus.Duis@eget.ca';

--09
alter table usuarios drop column idade;
alter table usuarios add column data_nascimento date;

--10
update usuarios set data_nascimento = '1991-09-29' 
where email = 'auctor@duiFuscediam.edu';
update usuarios set data_nascimento = '1988-11-02' 
where email = 'nec.metus.facilisis@vitaealiquet.edu';

--11
delete from usuarios 
where data_nascimento is null;

--12
alter table usuarios add constraint data_nasc unique(data_nascimento);

--13
insert into usuarios
(nome, data_nascimento, email, senha)
values
('Tate I. Dean',	'1989-05-01',	'Nunc@etmagnis.edu',	'd3V25D6Y'),
('Arsenio K. Harmon',	'1985-10-23',	'adipiscing.elit@turpis.com',	'm3T58S0C');
