const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Muscle extends Model {}

Muscle.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        image_url_main: {
            type: DataTypes.STRING,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'muscle',
      }
);

module.exports = { Muscle }
