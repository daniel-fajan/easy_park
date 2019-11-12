'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
	
	let Registro = sequelize.define('Registro',
	{
		id_registro:
		{
			field: 'id_registro',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},

		data_hora:
		{
			field: 'data_hora',
			type: DataTypes.DATE,
			allowNull: false
		},

		situacao:
		{
			field: 'situacao',
			type: DataTypes.BOOLEAN,
			allowNull: false
		},

		fk_vaga:
		{
			field: 'fk_vaga',
			type: DataTypes.STRING,
			allowNull: false
			// foreignKey: true
		}
		// momento_grafico: {
		// 	type: DataTypes.VIRTUAL, // campo 'falso' (não existe na tabela). Deverá ser preenchido 'manualmente' no select
		// 	allowNull: true
		// }
	}, 

	{
		tableName: 'tb_registros', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Registro;
};
