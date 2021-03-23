const { Exercise } = require('./Exercise');
const { Category }  = require('./Category')
const { Muscle } = require('./Muscle');
const { Equipment } = require('./Equipment');
const { Exercise_Equipment } = require('./exercise_equipment');
const { Exercise_Muscle }  = require('./exercise_muscle')
const { Exercise_Category } = require('./exercise_category');


Exercise.belongsTo(Category, {
    foreignKey: 'category_id',
    as: 'Category_ID'
  });
  
Category.hasMany(Exercise, {
    foreignKey: 'category_id',
  });
Exercise.belongsToMany(Muscle, {
    through: Exercise_Muscle,
    foreignKey: 'muscle_id',
});
Exercise.belongsToMany(Equipment, {
    through: Exercise_Equipment,
    foreignKey: 'equipment_id',
});
Muscle.belongsToMany(Exercise, {
    through: Exercise_Muscle,
    foreignKey: 'exercise_id',
});
Equipment.belongsToMany(Exercise, {
    through: Exercise_Equipment,
    foreignKey: 'exercise_id',
});
module.exports = { Exercise, Category, Equipment, Muscle };