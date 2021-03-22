const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const Sequelize = require('../config/connection');
const Exercises = require('./Exercises')

class Category extends Model {}

Category.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
        }
}
)


module.exports = { Category }