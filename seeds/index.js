const seedExercises = require('./exercise-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedExercises();
    console.log('\n----- EXERCISES SEEDED -----\n');
  
    process.exit(0);
};

seedAll();
