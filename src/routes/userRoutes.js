/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// router.post('/:id', userController.show);
// router.get('/', loginRequired, userController.index);

router.post('/', userController.store);// ao usar essa sintaxe é possivel passar um id como parametro
router.put('/', loginRequired, userController.Update);
router.delete('/', loginRequired, userController.delete);

export default router;

// index lista todos os usuarios -> GET
// store cria um novo usuario -> POST
// delete apaga um usuario -> DELETE
// show mostra um usuario -> GET
// update edita um usuario -> PATCH(alterar)  ou PUT(substituir tudo)
