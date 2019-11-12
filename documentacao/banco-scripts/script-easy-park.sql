create table Usuario(
idUsuario int primary key not null identity(1, 1),
nomeUsuar varchar(30) not null,
emailUsuar varchar(40) not null,
senhaUsuar varchar(16) not null,
tipoUsuar varchar(9) not null,
check(tipoUsuar='Empresa' or tipoUsuar='Motorista')
)
GO
create table Estacionamento(
idEstac int primary key not null identity(10, 1),
nomeEstac varchar(30) not null,
cnpj char(18) not null,
cep char(30) not null,
numEndereco int not null,
complemento varchar(50),
fkUsuar int,
foreign key(fkUsuar) references Usuario(idUsuario)
)
GO
create table Favorita(
fkEstacionamento int,
fkUsuario int,
foreign key (fkEstacionamento) references Estacionamento(idEstac),
foreign key (fkUsuario) references Usuario(idUsuario)
)
GO
create table Vagas(
idVaga varchar(5),
sensor int,
fkEstac int,
foreign key (fkEstac) references Estacionamento(idEstac),
primary key(idVaga,fkEstac)
)
GO
create table Registro(
data_hora datetime not null,
situacao_vaga bit not null,
fkVaga varchar(5) not null,
fkVaga_Estac int not null,
foreign key (fkVaga, fkVaga_Estac) references Vagas(idVaga,fkEstac),
primary key (fkVaga, fkVaga_Estac)
)
