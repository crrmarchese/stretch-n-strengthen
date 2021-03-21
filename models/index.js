const User = require('./User');
const Exercises = require('./Exercises');
const ExerciseCategory = require('./ExerciseCategory')
const Muscle = require('./Muscle')

ExerciseCategory.belongsTo(Exercises, {
    foreignKey: 'name',
    through: {
        model: Exercises,
        unique: false,
    },
    // as: 'name'
});

Exercises.hasMany(ExerciseCategory, {

});

Muscle.belongsTo(Exercises, {
    // not sure about this 
    foreignKey: 'id',
    through: {
        model: Exercises,
        unique: false,
    }
})

module.exports = { User, Exercises };