const { Model, DataTypes, Sequelize } = require('sequelize');
// const { Sequelize } = require('sequelize/types')
const sequelize = require('../config/connection')

class User extends Model { }

// // checkPassword(loginPw) {
// //     return bcrypt.compareSync(loginPw, this.password)
// //  }
// }

User.init(
    {
        id: {
            type: DataTypes.STRING,
            defaultValue: Sequelize.UUIDV4,
            required: true,
            primaryKey: true,
        },
        user_name: {
            type: DataTypes.STRING,
            required: true,
        },
        // password: {
        //     // hash password here
        // },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
)
// **** default user_name === Email ****
//     displayName: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     firstName: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     lastName: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     image: {
//         type: DataTypes.STRING,
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now()
//     }
// },
// hooks: {
//     beforeCreate: async (newUserData) => {
//         newUserData.password = await bcrypt.hash(newUserData.password, 10);
//         return newUserData
//     }
// },


module.exports = User 