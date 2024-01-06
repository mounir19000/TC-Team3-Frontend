


const getAppointments = async (req, res) => {
    try {
        const doctorId = req.params.doctorId;
        const doctor = await Doctor.findById(doctorId);
        if (!doctor) {
            return res.status(404).json({ error: 'Doctor not found' });
        }

        res.json(doctor.appointments);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Add a new appointment for a specific doctor
const addAppointment = async (req, res) => {
    try {
        const doctorId = req.params.doctorId;
        const doctor = await Doctor.findById(doctorId);
        if (!doctor) {
            return res.status(404).json({ error: 'Doctor not found' });
        }

        const newAppointmentData = req.body;
        doctor.appointments.push(newAppointmentData);
        // Add action and date to history
        doctor.history.push({
            action:   `add appointment: ${req.body}`,
            date: new Date(),
        });
        await doctor.save();

        res.status(201).json(newAppointmentData);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Automatically delete outdated appointments
const deleteOutdatedAppointments = async (req, res) => {
    try {
        const doctorId = req.params.doctorId;
        const doctor = await Doctor.findById(doctorId);
        if (!doctor) {
            return res.status(404).json({ error: 'Doctor not found' });
        }

        const currentDate = new Date();
        doctor.appointments = doctor.appointments.filter(appointment => appointment.date > currentDate);
        await doctor.save();

        res.json({ message: 'Outdated appointments deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export {deleteOutdatedAppointments, addAppointment,getAppointments};