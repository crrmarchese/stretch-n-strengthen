const { Model, DataTypes } = require('sequelize');
const { Sequelize } = require('sequelize/types')
const Sequelize = require('../config/connection')
class User extends Model {
    
// checkPassword(loginPw) {
//     return bcrypt.compareSync(loginPw, this.password)
//  }
}

User.init( 
    {
        id: {
            type: DataTypes.UUIDV4,
            defaultValue: Sequelize.UUIDV4,
             allowNull: false,
            // don't think we need the below since it's using UUID
            // primaryKey: true,
            // autoIncrement: true
        },
        // **** default user_name === Email ****
        user_name: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            },
         },
    },
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }

)
  
module.exports = { User }