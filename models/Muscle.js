const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const Sequelize = require('../config/connection');

class Muscle extends Model {}

Muscle.init(
    {
    id: {
        type: DataTypes.UUIDV4,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
    }
}   
)

module.exports = { Muscle }