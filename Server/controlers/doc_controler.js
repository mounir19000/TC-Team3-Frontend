
import Doctor from '../models/doctor.model.js'; 



 const getPatients = async (req, res) => {
    try {
        const doctorId = req.params.doctorId;
        const doctor = await Doctor.findById(doctorId);
        if (!doctor) {
            return res.status(404).json({ error: 'Doctor not found' });
        }
        res.json(doctor.patients);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

 const addPatient = async (req, res) => {
    try {
        const doctorId = req.params.doctorId;
        const doctor = await Doctor.findById(doctorId);
        if (!doctor) {
            return res.status(404).json({ error: 'Doctor not found' });
        }

        const newPatientData = req.body;
        doctor.patients.push(newPatientData);
        // Add action and date to history
        doctor.history.push({
            action:` Add a new patient: ${newPatientData.name}`,
            date: new Date(),
        });
        await doctor.save();

        res.status(201).json(newPatientData);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

 const updatePatient = async (req, res) => {
    try {
        const doctorId = req.params.doctorId;
        const doctor = await Doctor.findById(doctorId);
        if (!doctor) {
            return res.status(404).json({ error: 'Doctor not found' });
        }

        const patientId = req.params.patientId;
        const updatedPatientData = req.body;

        const patientToUpdate = doctor.patients.id(patientId);
        if (!patientToUpdate) {
            return res.status(404).json({ error: 'Patient not found' });
        }

        patientToUpdate.set(updatedPatientData);
        // Add action and date to history
        doctor.history.push({
            action:  `Update patient: ${patientToUpdate.name}`,
            date: new Date(),
        });
        await doctor.save();

        res.json(patientToUpdate);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

 const deletePatient = async (req, res) => {
    try {
        const doctorId = req.params.doctorId;
        const doctor = await Doctor.findById(doctorId);
        if (!doctor) {
            return res.status(404).json({ error: 'Doctor not found' });
        }

        const patientId = req.params.patientId;
        const patientToDelete = doctor.patients.id(patientId);
        if (!patientToDelete) {
            return res.status(404).json({ error: 'Patient not found' });
        }

        patientToDelete.remove();
        // Add action and date to history
        doctor.history.push({
            action:  `Delete patient: ${patientToDelete.name}`,
            date: new Date(),
        });
        await doctor.save();
        res.json({ message: 'Patient deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

 const searchPatientsByName = async (req, res) => {
    try {
        const doctorId = req.params.doctorId;
        const doctor = await Doctor.findById(doctorId);
        if (!doctor) {
            return res.status(404).json({ error: 'Doctor not found' });
        }

        const searchName = req.params.FirstName;
        const matchingPatients = doctor.patients.filter(patient => patient.FirstName.includes(searchName));
        // Add action and date to history
        doctor.history.push({
            action:  `Search patient of name: ${searchName}`,
            date: new Date(),
        });

        res.json(matchingPatients);

    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

 const searchPatientById = async (req, res) => {
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
        // Add action and date to history
        doctor.history.push({
            action:   `Search patient of id: ${patientId}`,
            date: new Date(),
        });

        res.json(patient);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export {searchPatientById ,searchPatientsByName,deletePatient,updatePatient,getPatients,addPatient};
