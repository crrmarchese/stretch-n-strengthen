const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Routine extends Model {}

Routine.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            // allowNull: false,
            primaryKey: true,
        },
        // ==================
        //had to comment this out - was getting foreign key constraight with this uncommented 
           // ==================
        // id_user: {      
        //     type: DataTypes.UUID,
        //     references: {
        //       model: 'user',
        //       key: 'id',
        //     },
        // },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'routine',
      }
);

module.exports = { Routine }
