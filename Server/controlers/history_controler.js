



const getHistory = async (req, res) => {
    try {
        const doctorId = req.params.doctorId;
        const doctor = await Doctor.findById(doctorId);
        if (!doctor) {
            return res.status(404).json({ error: 'Doctor not found' });
        }

        res.json(doctor.history);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};




const deleteHistoryEntry = async (req, res) => {
    try {
        const doctorId = req.params.doctorId;
        const doctor = await Doctor.findById(doctorId);
        if (!doctor) {
            return res.status(404).json({ error: 'Doctor not found' });
        }

        const entryId = req.params.entryId;
        const entryToDelete = doctor.history.id(entryId);
        if (!entryToDelete) {
            return res.status(404).json({ error: 'History entry not found' });
        }

        entryToDelete.remove();
        await doctor.save();

        res.json({ message: 'History entry deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};





const deleteEntireHistory = async (req, res) => {
    try {
        const doctorId = req.params.doctorId;
        const doctor = await Doctor.findById(doctorId);
        if (!doctor) {
            return res.status(404).json({ error: 'Doctor not found' });
        }

        doctor.history = [];
        await doctor.save();

        res.json({ message: 'Entire history deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


export { getHistory, deleteHistoryEntry, deleteEntireHistory };








































