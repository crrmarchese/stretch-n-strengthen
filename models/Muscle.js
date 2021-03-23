const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const Sequelize = require('../config/connection');

class Muscle extends Model { }

Muscle.init(
    {
        results: {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
            },
            image_url_main: {
                type: DataTypes.STRING,
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'muscle',
      }
);

module.exports = { Muscle }

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
// array returned from Muscles 
    // {
    //     "id": 2,
    //     "name": "Anterior deltoid",
    //     "is_front": true,
    //     "image_url_main": "/static/images/muscles/main/muscle-2.svg",
    //     "image_url_secondary": "/static/images/muscles/secondary/muscle-2.svg"
    // }