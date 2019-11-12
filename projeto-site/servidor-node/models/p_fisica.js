'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {

    let P_fisica = sequelize.define('P_fisica',
    {
        fk_user_pf:
        {
			field: 'fk_user_pf',
            type: DataTypes.INTEGER,
            // foreignKey
            allowNull: false
        },
        
        cpf:
        {
			field: 'cpf',
			type: DataTypes.CHAR,
			allowNull: false
        }
    },
    
	{
		tableName: 'tb_pf', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return P_fisica;
};
