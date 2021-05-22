import { Router } from 'express';
import Notes from '../controllers/Notes.js';

const router = Router();

router.get('/', Notes.getAll);

export default router;