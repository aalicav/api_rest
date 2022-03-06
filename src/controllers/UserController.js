import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // index
  async index(req, res) {
    try {
      const users = await User.findAll(); // encontra todos os usuarios
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      return res.json(user);
    } catch (e) {
      return res.json(null);
    }
  }

  // update
  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }
      const updateUser = await User.findByPk(id);
      if (!updateUser) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }
      const novosDados = await updateUser.update(req.body);
      return res.json(novosDados);
    } catch (e) {
      console.log(e);
      return res.json(null);
    }
  }

  // delete
  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }
      const updateUser = await User.findByPk(id);
      if (!updateUser) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }
      await updateUser.destroy();
      return res.json(updateUser);
    } catch (e) {
      console.log(e);
      return res.json(null);
    }
  }
}

export default new UserController();
