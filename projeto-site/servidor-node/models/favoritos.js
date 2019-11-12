'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {

    let Estacionamento = sequelize.define('Estacionamento',
    {
        fk_estac:
        {
			field: 'fk_estac',
            type: DataTypes.INTEGER,
            // foreignKey
			autoIncrement: true
        },
        
        fk_user:
        {
			field: 'fk_user',
            type: DataTypes.INTEGER,
            // foreignKey
			allowNull: false
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
