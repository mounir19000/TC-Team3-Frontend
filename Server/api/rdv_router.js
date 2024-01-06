import express from 'express';
import {deleteOutdatedAppointments, addAppointment,getAppointments} from '../controlers/rdv.controler.js';

const router = express.Router();

router.get('/doctors/:doctorId/appointments', getAppointments);
router.post('/doctors/:doctorId/appointments', addAppointment);
router.delete('/doctors/:doctorId/appointments', deleteOutdatedAppointments);


export default router;
