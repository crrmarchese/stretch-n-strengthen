const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class User_User extends Model {}

User_User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      lead_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "user",
            key: "id"
        },
      },
      follow_id: {
          type: DataTypes.INTEGER,
          references: {
              model: "user",
              key: "id"
          }
        },
      },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'user_user',
    }
  );

  module.exports = { User_User }