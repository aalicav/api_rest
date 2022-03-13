import Aluno from '../models/Aluno';
import Foto from '../models/Foto';


class AlunoController {
  // eslint-disable-next-line class-methods-use-this
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes:["id","nome","sobrenome","email","idade","peso","altura"],
      order:[["id","DESC"],[Foto,"id"]], //Ordena os elementos
      include:{
        model: Foto,
        attributes:['filename']
      }
    });
    res.json(alunos);
  },
  async store(req,res){
    try{
      const aluno = await Aluno.create(req.body);
      res.json(aluno)
    }catch(e){
      res.json(e.message);
    }
  },
  async delete(req,res){
    try{
      const { id } = await req.params;
      if(!id){
        res.status(400).json({
          errors:['Está faltando o Id']
        })
      }
      const aluno = await Aluno.findByPk(id)
      if(!aluno){
        res.status(400).json({
          errors:['Aluno não existe']
        })
      }
      await aluno.destroy();
      return res.json('Usuário deletado')
      }catch(e){
        errors: {e.message}
      }

  },
  async show(req,res){
    try{
      const { id } = await req.params;
      if(!id){
        res.status(400).json({
          errors:['Está faltando o Id']
        })
      }
      const aluno = await Aluno.findByPk(id, {
        attributes:["id","nome","sobrenome","email","idade","peso","altura"],
        order:[["id","DESC"],[Foto,"id"]], //Ordena os elementos
        include:{
          model: Foto,
          attributes:['filename']
        }
      })
      if(!aluno){
        res.status(400).json({
          errors:['Aluno não existe']
        })
      }
      res.json(aluno);
      }catch(e){
        errors: {e.message}
      }

  },
  async Update(req,res){
    try{
      const { id } = req.params;
      if(!id){
        return res.status(400).json({
          errors:['Está faltando o Id']
        })
      }
      const aluno = await Aluno.findByPk(id)
      if(!aluno){
        return res.status(400).json({
          errors:['Aluno não existe']
        })

      }
      const novoAluno = await aluno.update(req.body);
      return res.json(novoAluno);
  } catch(e){
    errors: {e.message}
  }
}
}
export default new AlunoController();
