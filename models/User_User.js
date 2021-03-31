const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class User_User extends Model {}

User_User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        // allowNull: false,
        primaryKey: true,
      },
      lead_id: {
        type: DataTypes.STRING,
        references: {
            model: "user",
            key: "id"
        },
      },
      follow_id: {
          type: DataTypes.STRING,
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