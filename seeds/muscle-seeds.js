const axios = require('axios').default;
const { Muscle } = require('../models');

const muscleData = async () => {
    try {
        const res = await axios.get('https://wger.de/api/v2/muscle/');
        console.log(res.data.results)
        return res.data.results
    } catch (err) {
        console.log(err);
    }
}

const seedMuscle= async () => Exercise.bulkCreate(await muscleData());

module.exports = seedMuscle;