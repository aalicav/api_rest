import Sequelize, { Model } from 'sequelize';
import config from '../config/appConfig';

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
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${config.url}/images/${this.getDataValue('filename')}`;
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
