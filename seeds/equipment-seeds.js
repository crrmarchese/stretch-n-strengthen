const axios = require('axios').default;
const { Equipment } = require('../models');

const equipmentData = async () => {
    try {
        const res = await axios.get('https://wger.de/api/v2/equipment/');
        console.log(res.data.results)
        return res.data.results
    } catch (err) {
        console.log(err);
    }
}

const seedEquipment= async () => Exercise.bulkCreate(await equipmentData());

module.exports = seedEquipment;