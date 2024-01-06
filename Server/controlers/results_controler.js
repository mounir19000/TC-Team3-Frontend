// Add a result to a specific medical record for a patient
const addResultToMedicalRecord = async (req, res) => {
    try {
        const doctorId = req.params.doctorId;
        const doctor = await Doctor.findById(doctorId);
        if (!doctor) {
            return res.status(404).json({ error: 'Doctor not found' });
        }

        const patientId = req.params.patientId;
        const patient = doctor.patients.id(patientId);
        if (!patient) {
            return res.status(404).json({ error: 'Patient not found' });
        }

        const recordId = req.params.recordId;
        const medicalRecord = patient.DossiersMed.id(recordId);
        if (!medicalRecord) {
            return res.status(404).json({ error: 'Medical record not found' });
        }

        const result = req.body.result;
        medicalRecord.result = result;
        await doctor.save();

        res.json({ message: 'Result added to medical record successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get the result from a specific medical record for a patient
const getResultFromMedicalRecord = async (req, res) => {
    try {
        const doctorId = req.params.doctorId;
        const doctor = await Doctor.findById(doctorId);
        if (!doctor) {
            return res.status(404).json({ error: 'Doctor not found' });
        }

        const patientId = req.params.patientId;
        const patient = doctor.patients.id(patientId);
        if (!patient) {
            return res.status(404).json({ error: 'Patient not found' });
        }

        const recordId = req.params.recordId;
        const medicalRecord = patient.DossiersMed.id(recordId);
        if (!medicalRecord) {
            return res.status(404).json({ error: 'Medical record not found' });
        }

        const result = medicalRecord.result;
        res.json({ result });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export {getResultFromMedicalRecord , addResultToMedicalRecord};