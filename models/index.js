const User = require('./User');
const { Exercise } = require('./Exercise');
const { Category }  = require('./Category')
const { Muscle } = require('./Muscle');
const { Equipment } = require('./Equipment');

Category.belongsTo(Exercises, {
    foreignKey: 'name',
    through: {
        model: Exercises,
        unique: false,
    },
    // as: 'name'
});

Exercise.hasMany(Category, {

});

Muscle.belongsToMany(Exercise, {
    foreignKey: 'id',
    through: {
        model: Exercise, 
        unique: false,
    },
});

Equipment.belongsToMany(Exercise, {
    foreignKey: 'id',
    through: {
        model: Exercise,
        unique: false
    }
});

Equipment.belongsToMany(Exercises, {

});

module.exports = { User, Exercise, Category, Equipment,  };

//exercise (parent model)
// muscles has many to many
// category has one to many
// equipment has many to many
