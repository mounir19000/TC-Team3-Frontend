import express from 'express';
import controllerLogin from '../controlers/auth_login.controler.js';
import { auth } from '../controlers/auth.controler.js';

const router = express.Router();


router.post('/login',auth, controllerLogin);



export default router;