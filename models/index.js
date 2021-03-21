const User = require('./User');
const Exercises = require('./Exercises');
const ExerciseCategory = require('./ExerciseCategory')

ExerciseCategory.belongsTo(Exercises, {
    foreignKey: 'name',
    through: {
        model: Exercises,
        unique: false,
    },
    // as: 'name'
})

module.exports = { User, Exercises };