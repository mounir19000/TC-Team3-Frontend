// Add an image to a specific medical record for a patient
const addImageToMedicalRecord = async (req, res) => {
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

        const image = req.body.image;
        medicalRecord.image = image;
        await doctor.save();

        res.json({ message: 'Image added to medical record successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get the image from a specific medical record for a patient
const getImageFromMedicalRecord = async (req, res) => {
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

        const image = medicalRecord.image;
        res.json({ image });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
export {addImageToMedicalRecord,getImageFromMedicalRecord};

