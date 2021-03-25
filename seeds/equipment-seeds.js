const axios = require('axios').default;
const { Equipment } = require('../models');

const equipmentData = async () => {
    try {
        const res = await axios.get('https://wger.de/api/v2/equipment/');
        return res.data.results
    } catch (err) {
        console.log(err);
    }
}

const seedEquipment= async () => Equipment.bulkCreate(await equipmentData());

module.exports = seedEquipment;