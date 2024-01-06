import express from 'express';
import {searchPatientById ,searchPatientsByName,deletePatient,updatePatient,getPatients,addPatient} from '../controlers/doc_controler.js'; 
const router = express.Router();



router.get('/doctors/:doctorId/patients' , getPatients);
router.post('/Doctor/Patients' , addPatient );

router.put('/doctors/:doctorId/patients/:patientId', updatePatient);
router.delete('/doctors/:doctorId/patients/:patientId', deletePatient);

router.get('/doctors/:doctorId/patients/search/name/:FirstName', searchPatientsByName);
router.get('/doctors/:doctorId/patients/:patientId', searchPatientById );


export default router;
