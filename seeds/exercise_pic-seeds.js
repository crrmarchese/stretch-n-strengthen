// const axios = require('axios').default;
// const { Exercise_Pic } = require('../models');

// const exercisePicData = async () => {
//     try {
//         const res = await axios.get('https://wger.de//api/v2/exerciseimage/');
//         res.data.results.forEach((ele) => {
//             ele.exercise_id = ele.exercise;
//             delete ele.exercise;
//         })
//         console.log(res.data.results)
//         return res.data.results
//     } catch (err) {
//         console.log(err);
//     }
// }

// const seedExercisePic = async () => Exercise_Pic.bulkCreate(await exercisePicData());

// module.exports = seedExercisePic;