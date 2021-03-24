const seedExercises = require('./exercise-seeds');
const seedMuscle = require('./muscle-seeds');
const seedEquipment = require('./equipment-seeds');
const seedCategory = require('./category-seeds');
const seedExerciseEquipment = require('./exercise_equipment-seeds');
const seedExerciseMuscle= require('./exercise_muscle-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedExercises();
    console.log('\n----- EXERCISES SEEDED -----\n');

    await seedMuscle();
    console.log('\n----- MUSCLES SEEDED -----\n');

    await seedEquipment();
    console.log('\n----- EQUIPMENT SEEDED -----\n');

    await seedCategory();
    console.log('\n----- CATEGORIES SEEDED -----\n');

    await seedExerciseEquipment();
    console.log('\n----- EXERCISE EQUIPMENT JOIN SEEDED -----\n');

    await seedExerciseMuscle();
    console.log('\n----- EXERCISE MUSCLE JOIN SEEDED -----\n');
  
    process.exit(0);
};

seedAll();
