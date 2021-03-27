const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Routine_Exercise extends Model {}

Routine_Exercise.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        // allowNull: false,
        primaryKey: true,
      },
      routine_id: {
        type: DataTypes.UUID,
        references: {
            model: 'routine',
            key: 'id'
        },
      },
      exercise_id: {
          type: DataTypes.UUID,
          references: {
              model: 'exercise',
              key: 'id'
          }
        },
      },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'routine_exercise',
    }
  );

  module.exports = { Routine_Exercise }