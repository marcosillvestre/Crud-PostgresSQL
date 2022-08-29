'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('games', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,

      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }

    })
  },
  async down(queryInterface) {

    await queryInterface.dropTable('games');

  }
};
