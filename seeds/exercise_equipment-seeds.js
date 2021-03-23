const axios = require('axios').default;
const { Exercise_Equipment } = require('../models');

// const equipmentData = async () => {
//     try {
//         const res = await axios.get('https://wger.de/api/v2/equipment/');
//         return res.data.results
//     } catch (err) {
//         console.log(err);
//     }
// }

const exerciseData = async () => {
    try {
        const res = await axios.get('https://wger.de/api/v2/exercise.json/?limit=999&language=2');
        return res.data.results
    } catch (err) {
        console.log(err);
    }
}

const exerciseEquipmentData = async () => {
    try{
        const exerciseEquipmentArray = [];
        const exData = await exerciseData();

        exData.forEach((ele1) => {
            ele1.equipment.forEach((ele2) => {
                exerciseEquipmentArray.push({
                    id_exercise: ele1.id,
                    id_equipment: ele2
                });
            }) 
            
        });
        console.log(exerciseEquipmentArray)

    } catch (err) {
        console.log(err);
    }


    // exData.array.forEach((ele1) => {
    //     eqData.array.forEach((ele2) => {
    //         ExerciseEquipmentArray.push({
    //             id_exercise: ele1,
    //             id_equipment: ele2
    //         });
    //     });
        
    // });
    // console.log(exerciseEquipmentArray)
}

exerciseEquipmentData();

// const seedExerciseEquipment = async () => console.log(await exerciseEquipmentData());
// seedExerciseEquipment

// module.exports = seedExerciseEquipment;