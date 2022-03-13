module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'fotos',
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
        originalname: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        aluno_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'alunos',
            key: 'id',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        filename: {
          type: Sequelize.STRING,
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
    await queryInterface.dropTable('fotos');
  },
};
