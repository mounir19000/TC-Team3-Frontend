import express from 'express';
import db from './config/db.js';
import signinRouter from './api/sign_up_router.route.js';
import loginRouter from './api/log_in_.router.js';
import verifyRouter from './api/verify_email_router.js';
import  historyController from './api/history_router.js';
import logDoctorAction  from './api/mdlw_history.js'; 
import patientController from './api/doc_router.js';
import rdvController from './api/rdv_router.js';
import resultcontroller from './api/results_router.js';
import imgController from './api/img_router.js';
import dmController from './api/dm_router.js';
import prescriController from './api/prescri_router.js';
import forgot from './api/forgot_router.js';

const app = express();
const PORT = 3004;

app.use(express.json());

// Connect to the database
db()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });


app.use('/doctor', signinRouter);

app.use('/doctor', loginRouter);

app.use('/doctor', verifyRouter);

app.use('/doctors',patientController)


app.use('/doctors', logDoctorAction);
app.use('/doctors', historyController);
app.use('/doctors/:doctorId/appointments',rdvController);


//results
app.use('/doctors/:doctorId/patients/:patientId/medical-records/:recordId/results', resultcontroller);

//img
app.use('/doctors/:doctorId/patients/:patientId/medical-records/:recordId/images', imgController);


//dm

app.use('/doctors/:doctorId/patients/:patientId/medical-records', dmController);
//prsecri

app.use('/doctors/:doctorId/patients/:patientId/medical-records/:recordId/prescriptions', prescriController);

app.use('/users/forgot-password',forgot);