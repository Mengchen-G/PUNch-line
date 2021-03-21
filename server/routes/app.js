import express from 'express';
import { getUser, updateUser } from '../controllers/user.js';
const router = express.Router();


router.get('/user/:UserName', getUser);
router.post('/user/:UserName', updateUser);

export default router;