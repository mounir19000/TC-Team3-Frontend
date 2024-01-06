// Add a prescription to a specific medical record for a patient
const addPrescriptionToMedicalRecord = async (req, res) => {
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

        const prescriptionData = req.body;
        medicalRecord.Prescription.push(prescriptionData);
        await doctor.save();

        res.json({ message: 'Prescription added to medical record successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get prescriptions from a specific medical record for a patient
const getPrescriptionsFromMedicalRecord = async (req, res) => {
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

        const prescriptions = medicalRecord.Prescription;
        res.json(prescriptions);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


export { addPrescriptionToMedicalRecord,getPrescriptionsFromMedicalRecord};