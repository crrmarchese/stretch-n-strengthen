const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// id = id, auto increment
// exercise_id --- match to exercise 
// references model category, model id

class Exercise_Category extends Model {}

Exercise_Category.init(
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
          model: "Exercise",
          key: "id"
      },
    },
    category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "Category",
            key: "id"
        }
      },
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'exercise_category',
  }
);

module.exports = { Exercise_Category }