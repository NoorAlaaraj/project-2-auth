'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  static associate(models) {
    models.order.belongsTo(models.user)
    models.order.hasMany(models.product)
  }
  }
  order.init({
    userId: DataTypes.INTEGER,
    orderComplete: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};