// Get all medical records for a specific patient
const getMedicalRecords = async (req, res) => {
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

        res.json(patient.DossiersMed);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Show medical records for a specific patient by name
const getMedicalRecordsByName = async (req, res) => {
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

        const searchName = req.params.name;
        const matchingRecords = patient.DossiersMed.filter(record => record.DrName === searchName);

        res.json(matchingRecords);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Show medical records for a specific patient by date
const getMedicalRecordsByDate = async (req, res) => {
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

        const searchDate = req.params.date;
        const matchingRecords = patient.DossiersMed.filter(record => record.date === searchDate);

        res.json(matchingRecords);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export {getMedicalRecordsByDate,getMedicalRecordsByName,getMedicalRecords};