import Aluno from '../models/Aluno';

class HomeController {
  // eslint-disable-next-line class-methods-use-this
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Alisson',
      sobrenome: 'Oliveira',
      email: 'alissonoliveir@gmail.com',
      idade: 21,
      peso: 80,
      altura: 1.50,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
