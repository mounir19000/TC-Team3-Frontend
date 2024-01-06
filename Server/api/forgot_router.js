

import express from 'express';
import { sendPasswordResetEmail } from '../controlers/forgot_controler.js';

const router = express.Router();

router.post('/users/forgot-password', sendPasswordResetEmail);

export default router;
