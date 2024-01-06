
import express from 'express';
import {getMedicalRecordsByDate,getMedicalRecordsByName,getMedicalRecords} from '../controlers/dm_controler';

const  router = express.Router();

router.get('/doctors/:doctorId/patients/:patientId/medical-records', getMedicalRecords);
router.get('/doctors/:doctorId/patients/:patientId/medical-records/:name', getMedicalRecordsByName);
router.get('/doctors/:doctorId/patients/:patientId/medical-records/:date', getMedicalRecordsByDate);

export default router;