import User from '../models/User';

class TokenController {
  // eslint-disable-next-line class-methods-use-this
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais invalidas'],
      });
    }
    const user = User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({
        errors: ['Usuário não existe'],
      });
    }
    res.json(user);
  }
}

export default new TokenController();
