'use strict';
const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
        first_name: 'Admin',
        last_name: 'Behm',
        email: 'admin@example.com',
        role: 'admin',
        password_digest: await bcrypt.hash(process.env.ADMIN_PASSWORD, 10),
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', {
      email: 'admin@example.com'
    })
  }
}