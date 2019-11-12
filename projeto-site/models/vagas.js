'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
	
	let Vagas = sequelize.define('Vagas',
	{
		id_vaga:
		{
			field: 'id_vaga',
			type: DataTypes.STRING,
			primaryKey: true
		},

		fk_estacionamento:
		{
			field: 'fk_estacionamento',
			type: DataTypes.INTEGER,
			allowNull: false
		},

		sensor:
		{
			field: 'sensor',
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 

	{
		tableName: 'tb_vagas', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Vagas;
};