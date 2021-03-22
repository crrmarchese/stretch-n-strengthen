const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const Sequelize = require('../config/connection');

class Equipment extends Model {}

Equipment.init(
    {
        id: {
            type: DataTypes.UUIDV4,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false
        },
        category: {

        },
        description: {

        },
        name: {

        },

    }
)

module.exports = { Equipment }