const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const Sequelize = require('../config/connection');

class Exercises extends Model {}

Exercises.init(
    {
        id: {
            type: DataTypes.UUIDV4,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false
        },
        
    }
)

module.exports = { Exercises }