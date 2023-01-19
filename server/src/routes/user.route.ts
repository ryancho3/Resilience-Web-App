import express from 'express';
import { getUser, addHistory } from '../controllers/user.controller';

const router = express.Router();

router.post('/history', addHistory);
router.get('/:id', getUser);

export default router;
