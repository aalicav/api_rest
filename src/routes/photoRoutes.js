/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { Router } from 'express';

import PhotoController from '../controllers/PhotoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, PhotoController.store);
export default router;
