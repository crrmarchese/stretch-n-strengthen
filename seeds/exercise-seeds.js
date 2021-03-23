const axios = require('axios').default;
const { Exercise } = require('../models');

const exerciseData = async () => {
    try {
        const res = await axios.get('https://wger.de/api/v2/exercise.json/?limit=999&language=2');
        return res.data.results
    } catch (err) {
        console.log(err);
    }
}

const replaceNull = async () => {
    try{
        const exData = await exerciseData();

        exData.forEach((ele) => {
            if (ele.equipment.length === 0) {
                ele.equipment.push(7);
            }
        });
        console.log(exData)
        return exData;

    } catch (err) {
        console.log(err);
    }
}

const seedExercise = async () => Exercise.bulkCreate(await replaceNull());

module.exports = seedExercise;