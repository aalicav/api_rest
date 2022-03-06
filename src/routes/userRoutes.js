/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store);
router.get('/', userController.index);
router.get('/:id', userController.show);// ao usar essa sintaxe é possivel passar um id como parametro
router.put('/:id', userController.update);

export default router;

// index lista todos os usuarios -> GET
// store cria um novo usuario -> POST
// delete apaga um usuario -> DELETE
// show mostra um usuario -> GET
// update edita um usuario -> PATCH(alterar)  ou PUT(substituir tudo)
