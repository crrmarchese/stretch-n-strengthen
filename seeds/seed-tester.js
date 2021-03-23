const axios = require('axios').default;

const equipmentData = async () => {
    try {
        const res = await axios.get('https://wger.de/api/v2/equipment/');
        return res.data.results
    } catch (err) {
        console.log(err);
    }
}

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

const test = async () => {
    const seedData = await exerciseEquipmentData();
    let exData = await replaceNull();
    seedData.forEach((ele1) => {
        exData = exData.filter(ele2 => ele2.id !== ele1.exercise_id)
    })
    console.log(exData)



}

const test2 = async () => {
    let seedData = await exerciseEquipmentData();
    const exData = await replaceNull();
    exData.forEach((ele1) => {
        seedData = seedData.filter(ele2 => ele2.exercise_id !== ele1.id)
    })
    console.log(seedData)



}

test2();
