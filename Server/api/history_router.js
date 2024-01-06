

import express from 'express';
import { getHistory, deleteHistoryEntry, deleteEntireHistory } from '../controlers/history_controler.js';
import logDoctorAction from './mdlw_history.js';

const router = express.Router();

router.get('/history/:doctorId', logDoctorAction, getHistory);
router.delete('/history/:doctorId/:entryId', logDoctorAction, deleteHistoryEntry);
router.delete('/history/:doctorId', logDoctorAction, deleteEntireHistory);

export default router;
