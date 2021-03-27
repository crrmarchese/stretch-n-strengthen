const axios = require('axios').default;
const { Exercise } = require('../models');

const exerciseData = async () => {
    try {
        const res = await axios.get('https://wger.de/api/v2/exercise.json/?limit=999&language=2');
        console.log(res.data.results)
        res.data.results.forEach((ele) => {
            ele.category_id = ele.category;
            delete ele.category;
        })
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
        return exData;

    } catch (err) {
        console.log(err);
    }
}

const seedExercise = async () => Exercise.bulkCreate(await replaceNull());

module.exports = seedExercise;