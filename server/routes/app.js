import express from 'express';
import { getTests, postTest } from '../controllers/test.js';
const router = express.Router();


router.get('/getTest', getTests);
router.post('/postTest', postTest);

export default router;