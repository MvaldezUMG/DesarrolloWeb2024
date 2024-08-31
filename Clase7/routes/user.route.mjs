import {getAll, create, getById, update, remove } from '../controllers/user.controller.mjs';
import Router from 'express';

const router = Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);

export default router;