'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('schedule', {
      mealTime_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      meal_id: {
        type: Sequelize.SMALLINT,
        allowNull: false,
        references: {
          model: 'meals',
          key: 'id'
        }
      },
      user_id: {
        type: Sequelize.SMALLINT,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      mealCategory: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('schedule');
  }
};