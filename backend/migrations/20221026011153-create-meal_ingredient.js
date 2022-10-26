'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('meal_ingredients', {
      id: {
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
      ingredient_id: {
        type: Sequelize.SMALLINT,
        allowNull: false,
        references: {
          model: 'ingredients',
          key: 'id'
        }
      },
      quantity: {
        type: Sequelize.SMALLINT,
        allowNull: false,
      },
      unit: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('meal_ingredients');
  }
};