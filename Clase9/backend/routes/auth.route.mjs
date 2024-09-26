import {login} from '../controllers/auth.controller.mjs';
import { Router } from 'express';

const router = Router();

router.post('/login', login);

export default router;