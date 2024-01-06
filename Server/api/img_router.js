
import express from 'express';
import {addImageToMedicalRecord,getImageFromMedicalRecord} from '../controlers/img_controler.js';
const router= express.Router();

router.post('/doctors/:doctorId/patients/:patientId/medical-records/:recordId/images', addImageToMedicalRecord);
router.get('/doctors/:doctorId/patients/:patientId/medical-records/:recordId/images', getImageFromMedicalRecord);

export default router;