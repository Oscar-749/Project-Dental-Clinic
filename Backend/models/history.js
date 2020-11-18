'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  History.init({
    id_client: DataTypes.INTEGER,
    allergies: DataTypes.BOOLEAN,
    services: DataTypes.INTEGER,
    pendding_money: DataTypes.INTEGER,
    total_money: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};