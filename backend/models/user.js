'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate({ Meal, Schedule }) {
      User.hasMany(Meal, { as: 'user', foreignKey: 'user_id' })
      User.hasMany(Schedule, { as: 'author', foreignKey: 'user_id' })
    }

  };
  User.init({
    id: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true

    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    passwordDigest: DataTypes.STRING
  }, {
    sequelize,
    underscored: true,
    modelName: 'User',
    tableName: 'users',
    timestamps: false,
  });
  return User;
};