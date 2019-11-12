'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {

    let P_juridica = sequelize.define('P_juridica',
    {
        fk_user_pj:
        {
			field: 'fk_user_pj',
            type: DataTypes.INTEGER,
            allowNull: false
        },
        
        cnpj:
        {
			field: 'cnpj',
			type: DataTypes.CHAR,
			allowNull: false
        }
    },
    
	{
		tableName: 'tb_pj', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return P_juridica;
};
