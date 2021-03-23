const axios = require('axios').default;
const { Category } = require('../models');

const categoryData = async () => {
    try {
        const res = await axios.get('https://wger.de/api/v2/exercisecategory/');
        return res.data.results
    } catch (err) {
        console.log(err);
    }
}

const seedCategory= async () => Category.bulkCreate(await categoryData());

module.exports = seedCategory;