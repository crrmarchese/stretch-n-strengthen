const { Model, DataTypes, Sequelize, STRING } = require('sequelize');
// const { Sequelize } = require('sequelize/types')
const sequelize = require('../config/connection')
const bcrypt = require('bcrypt')

class Google extends Model {}

Google.init(
    {
        googleID: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        displayName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {

        hooks: {
            beforeCreate: async (newGoogleData) => {
                newGoogleData.password = await bcrypt.hash(newGoogleData, 10);
                return newGoogleData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Google'
    }
)

module.exports = Google