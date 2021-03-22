const axios = require('axios').default;
const { Exercise } = require('../models');

const exerciseData = async () => {
    try {
        const res = await axios.get('https://wger.de/api/v2/exercise.json/?limit=5');
        return res.data.results
    } catch (err) {
        console.log(err);
    }
}

const seedExercise = async () => Exercise.bulkCreate(await exerciseData());

module.exports = seedExercise;