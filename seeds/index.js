const seedExercises = require('./exercise-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedExercises();
    console.log('\n----- EXERCISES SEEDED -----\n');

    await seedMuscle();
    console.log('\n----- EXERCISES SEEDED -----\n');

    await seedEquipment();
    console.log('\n----- EXERCISES SEEDED -----\n');

    await seedCategory();
    console.log('\n----- EXERCISES SEEDED -----\n');
  
    process.exit(0);
};

seedAll();
