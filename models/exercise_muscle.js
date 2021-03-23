// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Exercise_Muscle extends Model {}

// Exercise_Muscle.init(
//     {
//       id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true,
//       },
//       exercise_id: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: "Exercise",
//             key: "id"
//         },
//       },
//       muscle_id: {
//           type: DataTypes.INTEGER,
//           references: {
//               model: "Muscle",
//               key: "id"
//           }
//         },
//       },
//     {
//       sequelize,
//       timestamps: false,
//       freezeTableName: true,
//       underscored: true,
//       modelName: 'exercise_muscle',
//     }
//   );

//   module.exports = { Exercise_Muscle }