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
        user_id: {      
            type: DataTypes.STRING,
            references: {
              model: 'user',
              key: 'id',
            },
        },
        name: {
            defaultValue: "Default Routine Name!!",
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            defaultValue: "Here the user will be able to put in a detailed description of the routine that they are creating.",
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
