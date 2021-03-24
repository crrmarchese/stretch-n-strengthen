const { Exercise } = require('./Exercise');
const { Category }  = require('./Category')
const { Muscle } = require('./Muscle');
const { Equipment } = require('./Equipment');
const { Exercise_Equipment } = require('./Exercise_Equipment');
const { Exercise_Muscle }  = require('./Exercise_Muscle')


Exercise.belongsTo(Category, {
    foreignKey: 'category_id',
  });
  
Category.hasMany(Exercise, {
    foreignKey: 'category_id',
  });
  
Exercise.belongsToMany(Muscle, {
    through: Exercise_Muscle,
    foreignKey: 'exercise_id',
});

Exercise.belongsToMany(Equipment, {
    through: Exercise_Equipment,
    foreignKey: 'exercise_id',
});

Muscle.belongsToMany(Exercise, {
    through: Exercise_Muscle,
    foreignKey: 'muscle_id',
});

Equipment.belongsToMany(Exercise, {
    through: Exercise_Equipment,
    foreignKey: 'equipment_id',
});

module.exports = { Exercise, Category, Equipment, Muscle, Exercise_Equipment, Exercise_Muscle };