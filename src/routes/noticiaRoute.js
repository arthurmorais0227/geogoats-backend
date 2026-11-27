import { clerkMiddleware } from '@clerk/express';
import express from 'express';
import * as controller from '../controllers/noticiaController.js';
import { authPublic } from '../utils/apiKey.js';
import { exigirAdmin } from '../utils/clerkAuth.js';

const router = express.Router();

const clerk = clerkMiddleware();

router.get('/', authPublic, controller.buscarTodos);
router.get('/:id', authPublic, controller.buscarPorId);

router.post('/', authPublic, clerk, exigirAdmin, controller.criar);
router.put('/:id', authPublic, clerk, exigirAdmin, controller.atualizar);
router.delete('/:id', authPublic, clerk, exigirAdmin, controller.deletar);

export default router;