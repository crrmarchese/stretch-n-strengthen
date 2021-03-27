const { Exercise } = require('./Exercise');
const { Category }  = require('./Category')
const { Muscle } = require('./Muscle');
const { Equipment } = require('./Equipment');
const { Routine } = require('./Routine');
const { User } = require('./User');
const { Exercise_Equipment } = require('./Exercise_Equipment');
const { Exercise_Muscle }  = require('./Exercise_Muscle');
const { Routine_Exercise }  = require('./Routine_Exercise');
const { User_User }  = require('./User_User');

// Many Exercises to One Category
Exercise.belongsTo(Category, {
    foreignKey: 'category_id',
  });
  
Category.hasMany(Exercise, {
    foreignKey: 'category_id',
  });

// Many Routines to One User
Routine.belongsTo(User, {
    foreignKey: 'routine_id',
  });
  
User.hasMany(Routine, {
    foreignKey: 'routine_id',
  });

// Many Exercises to Many Muscles
Exercise.belongsToMany(Muscle, {
    through: Exercise_Muscle,
    foreignKey: 'exercise_id',
});

Muscle.belongsToMany(Exercise, {
    through: Exercise_Muscle,
    foreignKey: 'muscle_id',
});

// Many Exercises to Many Routines
Exercise.belongsToMany(Routine, {
    through: Routine_Exercise,
    foreignKey: 'exercise_id',
});

Routine.belongsToMany(Exercise, {
    through: Routine_Exercise,
    foreignKey: 'routine_id',
});

// Many Exercises to Many Equipment
Equipment.belongsToMany(Exercise, {
    through: Exercise_Equipment,
    foreignKey: 'equipment_id',
});

Exercise.belongsToMany(Equipment, {
    through: Exercise_Equipment,
    foreignKey: 'exercise_id',
});

// Many Users to Many Users
User.belongsToMany(User, {
  through: User_User,
  foreignKey: 'lead_id',
  as: "leader"
});

User.belongsToMany(User, {
  through: User_User,
  foreignKey: 'follow_id',
  as: 'follower'
});

module.exports = { Exercise, Category, Equipment, Muscle, Routine, User, Exercise_Equipment, Exercise_Muscle, Routine_Exercise, User_User };