import express from 'express'
import controllersignup from '../controlers/sign_up.controler.js'

const router = express.Router();

router.post('/signup', controllersignup)    ;

export default router;