const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Equipment extends Model { }

Equipment.init(
    {
    // not sure if this will work but YEEEEHAW
    // results: {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        // equipment name ie - name: barbell 
        name: {
            type: DataTypes.STRING,
        }
    // }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'equipment',
      }
);

module.exports = { Equipment }

// {
//     ID: 101,
//     CATEGORY: 11,
//     DESCRIPTION: '<p>Take two dumbbells and sit on a decline bench, the feet are firmly on the floor, the head is rest
// ing the bench. Hold the weights next to the chest, at the height of your nipples and press them up till the arms are str
// etched. Let the weight slowly and controlled down.</p>',
//     NAME: 'Decline Bench Press Dumbbell',
//     name_original: 'Decline bench press dumbbell',
//     MUSCLES: [Array],
//     muscles_secondary: [],
//     EQUIPMENT: [Array],
//     creation_date: '2013-05-05',
//     LANGUAGE: 2,
//     uuid: '80d318b3-4b8a-41aa-9c6c-0a2a921fe1e6',
//     variations: 7
//   },

// {
//     "count": 10,
//     "next": null,
//     "previous": null,
//     "results": [
//         {
//             "id": 1,
//             "name": "Barbell"
//         },
//         {
//             "id": 8,
//             "name": "Bench"
//         },
//         {
//             "id": 3,
//             "name": "Dumbbell"
//         },
//         {
//             "id": 4,
//             "name": "Gym mat"
//         },
//         {
//             "id": 9,
//             "name": "Incline bench"
//         },
//         {
//             "id": 10,
//             "name": "Kettlebell"
//         },
//         {
//             "id": 7,
//             "name": "none (bodyweight exercise)"
//         },
//         {
//             "id": 6,
//             "name": "Pull-up bar"
//         },
//         {
//             "id": 5,
//             "name": "Swiss Ball"
//         },
//         {
//             "id": 2,
//             "name": "SZ-Bar"
//         }
//     ]
// }