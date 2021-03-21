const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const Sequelize = require('../config/connection');
const Exercises = require('./Exercises')

class ExerciseCategory extends Model {}

ExerciseCategory.init(
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


module.exports = { ExerciseCategory }