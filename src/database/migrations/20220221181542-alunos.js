module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'alunos',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        sobrenome: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        idade: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        peso: {
          type: Sequelize.FLOAT,
          allowNull: true,
        },
        altura: {
          type: Sequelize.FLOAT,
          allowNull: true,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      },
    );
  },

  async down(queryInterface) {
    await queryInterface.dropTable('alunos');
  },
};
