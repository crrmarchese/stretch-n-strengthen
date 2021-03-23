const axios = require('axios').default;
const { Exercise_Equipment } = require('../models');

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

const exerciseEquipmentData = async () => {
    try{
        const exerciseEquipmentArray = [];
        const exData = await replaceNull();

        exData.forEach((ele1) => {
            ele1.equipment.forEach((ele2) => {
                exerciseEquipmentArray.push({
                    exercise_id: ele1.id,
                    equipment_id: ele2
                });
            });
            
        });
        
        return exerciseEquipmentArray;

    } catch (err) {
        console.log(err);
    }
}

const seedExerciseEquipment = async () => Exercise_Equipment.bulkCreate(await exerciseEquipmentData()) 

module.exports = seedExerciseEquipment;