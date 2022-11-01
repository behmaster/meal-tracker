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
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    role: {
      type: DataTypes.ENUM,
      values: [
        'user',
        'admin',
      ],
  },
    password_digest: DataTypes.STRING
  }, {
    sequelize,
    underscored: true,
    modelName: 'User',
    tableName: 'users',
  });
  return User;
};