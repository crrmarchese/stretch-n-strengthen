const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Routine extends Model {}

Routine.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        id_user: {      
            type: DataTypes.INTEGER,
            // references: {
            //   model: 'user',
            //   key: 'id',
            // },
        },
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
