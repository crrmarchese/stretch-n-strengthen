const { Exercise } = require('./Exercise');
const { Category }  = require('./Category')
const { Muscle } = require('./Muscle');
const { Equipment } = require('./Equipment');
// const { User } = require('./user');

// Category.belongsTo(Exercise, {
//     foreignKey: 'name',
//     through: {
//         model: Exercise,
//         unique: false,
//     },
//     // as: 'name'
// });

// // Exercise.hasMany(Category, {

// // });

// Muscle.belongsToMany(Exercise, {
//     foreignKey: 'id',
//     through: {
//         model: Exercise, 
//         unique: false,
//     },
// });

// Equipment.belongsToMany(Exercise, {
//     foreignKey: 'id',
//     through: {
//         model: Exercise,
//         unique: false
//     }
// });

// Equipment.belongsToMany(Exercise, {

// });

module.exports = {  Exercise, Category, Equipment, Muscle };

//exercise (parent model)
// muscles has many to many
// category has one to many
// equipment has many to many
