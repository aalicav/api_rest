import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class users extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          // validação
          notEmpty: {
            // Não pode ficar vazio
            len: {
              args: [3, 255], // tamanho minimo e máximo
              msg: 'Campo nome deve ter entre 3 e 255 caracteres',
            },
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: { msg: 'email já existe' },
        validate: {
          // validação
          isEmail: {
            msg: 'Email invalido',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          // validação
          notEmpty: {
            // Não pode ficar vazio
            len: {
              args: [6, 50], // tamanho minimo e máximo
              msg: 'A senha precisa ter entre 6 e 50 caracteres',
            },
          },
        },
      }, // Este campo não vai para a BD
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (user) => {
      // executa uma função antes de fazer alguma coisa
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8); // tamanho do SALT
      }
    });

    return this;
  }
}
