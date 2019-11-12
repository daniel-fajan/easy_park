'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {

    let Estacionamento = sequelize.define('Estacionamento',
    {
        id_estac:
        {
			field: 'id_estac',
			type: DataTypes.INTEGER,
			primaryKey: true,
			// autoIncrement: true
        },
        
        nome_estac:
        {
			field: 'nome_estac',
			type: DataTypes.STRING,
			allowNull: false
        },
        
        cep:
        {
			field: 'cep',
			type: DataTypes.CHAR,
			allowNull: false
        },
        
        numero:
        {
			field: 'numero',
			type: DataTypes.INTEGER,
			allowNull: false
        },
        
        responsavel:
        {
            field: 'responsavel',
            type: DataTypes.STRING,
            allowNull: false
            // foreignKey
        }
    },
    
	{
		tableName: 'tb_estacionamento', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Estacionamento;
};
