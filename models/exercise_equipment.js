const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Exercise_Equipment extends Model {}

Exercise_Equipment.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      exercise_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'exercise',
            key: 'id'
        },
      },
      equipment_id: {
          type: DataTypes.INTEGER,
          references: {
              model: 'equipment',
              key: 'id'
          }
        },
      },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'exercise_equipment',
    }
  );

  module.exports = { Exercise_Equipment }