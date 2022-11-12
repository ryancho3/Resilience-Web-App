import express from 'express';
import { getCitations } from '../controllers/citation.controller';

const router = express.Router();

router.get('/citations', getCitations);

export default router;
