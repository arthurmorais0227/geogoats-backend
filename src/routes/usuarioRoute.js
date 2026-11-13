import express from 'express';
import * as controller from '../controllers/usuarioController.js';
import { authAdmin } from '../utils/apiKey.js';

const router = express.Router();

router.post('/', authAdmin, controller.criar);
router.get('/', authAdmin, controller.buscarTodos);
router.get('/:id', authAdmin, controller.buscarPorId);
router.put('/:id', authAdmin, controller.atualizar);
router.delete('/:id', authAdmin, controller.deletar);

export default router;
