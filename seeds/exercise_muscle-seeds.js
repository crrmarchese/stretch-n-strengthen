const axios = require('axios').default;
const { Exercise_Muscle } = require('../models');

const exerciseData = async () => {
    try {
        const res = await axios.get('https://wger.de/api/v2/exercise.json/?limit=999&language=2');
        return res.data.results
    } catch (err) {
        console.log(err);
    }
}

const exerciseMuscleData = async () => {
    try{
        const exerciseMuscleArray = [];
        const exData = await exerciseData();

        exData.forEach((ele1) => {
            ele1.muscles.forEach((ele2) => {
                exerciseMuscleArray.push({
                    exercise_id: ele1.id,
                    muscle_id: ele2
                });
            });
        });
        
        return exerciseMuscleArray;

    } catch (err) {
        console.log(err);
    }
}

const seedExerciseMuscle = async () => Exercise_Muscle.bulkCreate(await exerciseMuscleData());

module.exports = seedExerciseMuscle;