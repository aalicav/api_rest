import Sequelize, { Model } from 'sequelize';

export default class Foto extends Model {
  static init(sequelize) {
    super.init({
      filename: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            args: [3, 255],
            msg: 'Campo não pode ficar vazio',
          },
        },
      },
      originalname: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            args: [3, 255],
            msg: 'Campo não pode ficar vazio',
          },
        },
      },
      nome: {
        type: Sequelize.STRING,
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 e 255 caracteres',
          },
        },
      },
    }, {
      sequelize,
      tableName: 'fotos',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
