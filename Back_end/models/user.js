'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.List, {foreignKey: 'UserId'})
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg : `Email already registered`
      },
      validate: {
        notNull :{
          msg : `Email can't be null`
        },
        notEmpty :{
          msg : `Email can't be empty`
        },
        isEmail :{
          msg : `Wrong email format`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull :{
          msg : `Password can't be null`
        },
        notEmpty :{
          msg : `Password can't be empty`
        },
        len: [5, 50]
      }
    },
    role: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (user) => {
        if (user.password) {      
          user.password = hashPassword(user.password);
        }
      },
      beforeUpdate: (user) => {
        if (user.password) {
          user.password = hashPassword(user.password);
        }
      },
    },
  });
  return User;
};