'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class List extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      List.belongsTo(models.User, {foreignKey: 'UserId'})
    }
  }
  List.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull :{
          msg : `Name can't be null`
        },
        notEmpty :{
          msg : `Name can't be empty`
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull :{
          msg : `UserId can't be null`
        },
        notEmpty :{
          msg : `UserId can't be empty`
        }
      }
    },
  }, {
    sequelize,
    modelName: 'List',
  });
  return List;
};