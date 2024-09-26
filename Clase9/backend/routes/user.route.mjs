import {getAll, create, getById, update, remove } from '../controllers/user.controller.mjs';
import Router from 'express';
import {body} from 'express-validator';
import {userValidator} from '../validators/user.validator.mjs';
import { validateInputs } from '../middleware/validateInput.middleware.mjs';
import { requestLogger } from '../middleware/requestLogger.middleware.mjs';
const router = Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/',  requestLogger, ...userValidator.create, validateInputs, create);
router.put('/:id', update);
router.delete('/:id', remove);

export default router;