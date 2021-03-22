const User = require('./User');
const { Exercises } = require('./Exercises');
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

Exercises.hasMany(Category, {

});

Muscle.belongsToMany(Exercises, {
    foreignKey: 'id',
    through: {
        model: Exercises, 
        unique: false,
    },
});

Equipment.belongsToMany(Exercises, {
    foreignKey: 'id',
    through: {
        model: Exercises,
        unique: false
    }
});

Equipment.belongsToMany(Exercises, {

});

module.exports = { User, Exercises };

//exercise (parent model)
// muscles has many to many
// category has one to many
// equipment has many to many
