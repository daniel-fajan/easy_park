
create table tb_usuario(

id_user int primary key identity (100, 1),
nome_user varchar (40),
email_user varchar (40),
senha_user varchar (40)
);
GO

create table tb_pf(

fk_user_pf int,
foreign key (fk_user_pf) references tb_usuario (id_user),
cpf char (14)
);
GO

create table tb_pj(

fk_user_pj int,
foreign key (fk_user_pj) references tb_usuario (id_user),
cnpj char (18)
);
GO

create table tb_estacionamento(

id_estac int primary key identity (1, 1),
nome_estac varchar (40),
cep char (9),
numero int,
responsavel varchar (30),
foreign key (responsavel) references tb_usuario (id_user)
);
GO

create table tb_favoritos(

fk_estac int,
foreign key (fk_estac) references tb_estacionamento (id_estac),
fk_user int,
foreign key (fk_user) references tb_usuario (id_user)
);
GO

create table tb_vagas(

id_vaga varchar (6) primary key,
sensor int,
fk_estacionamento int,
foreign key (fk_estacionamento) references tb_estacionamento (id_estac)
);
GO

create table tb_registros(

id_registro int primary key identity (1000, 1),
data_hora datetime,
situacao bit,
fk_vaga varchar (6),
foreign key (fk_vaga) references tb_vagas (id_vaga)
);
GO






