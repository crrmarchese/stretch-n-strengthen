const { Model, DataTypes, Sequelize } = require('sequelize');
// const { Sequelize } = require('sequelize/types')
const sequelize = require('../config/connection')
const bcrypt = require('bcrypt')


class User extends Model {
  async checkPassword(loginPw) {
    return await bcrypt.compare(loginPw, this.password)
  }
}

User.init(
  {
    id: {
      type: DataTypes.STRING,
      defaultValue: Sequelize.UUIDV4,
      required: true,
      primaryKey: true,
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "New User"
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "New"
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "User"
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
  
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);


module.exports =  { User }