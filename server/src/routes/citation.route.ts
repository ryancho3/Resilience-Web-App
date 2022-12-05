import express from 'express';
import {
  getCitations,
  getAllKeywords,
  getAllOffenseTypes,
} from '../controllers/citation.controller';

const router = express.Router();

router.get('/citations', getCitations);
router.get('/keywords/all', getAllKeywords);
router.get('/offense_type/all', getAllOffenseTypes);


export default router;
