import express from 'express';
import {getResultFromMedicalRecord , addResultToMedicalRecord} from '../controlers/results_controler';
const router= express.Router();

router.post('/doctors/:doctorId/patients/:patientId/medical-records/:recordId/results', addResultToMedicalRecord);
router.get('/doctors/:doctorId/patients/:patientId/medical-records/:recordId/results', getResultFromMedicalRecord);

export default router;


