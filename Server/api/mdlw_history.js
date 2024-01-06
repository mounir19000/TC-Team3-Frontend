
import doctorModel from '../models/doctor.model.js';

const logDoctorAction = async (req, res, next) => {
  const { doctorId } = req.params;

  try {
    // Find the doctor by ID
    const doctor = await doctorModel.findById(doctorId);

    if (!doctor) {
      return res.status(404).json({
        status: 'FAILED',
        message: 'Doctor not found',
      });
    }

    // Log the action (customize based on your requirements)
    const actionLog = {
      action: `${req.method} ${req.originalUrl}`,
      timestamp: new Date(),
    };

    // Add the action to the history array
    doctor.history.push(actionLog);

    // Save the updated doctor
    await doctor.save();

    // Pass the doctor and action log to the next middleware or route handler
    req.doctor = doctor;
    req.actionLog = actionLog;

    next();
  } catch (error) {
    console.error(error);

    res.status(500).json({
      status: 'FAILED',
      message: 'An error occurred while logging the action',
    });
  }
};

export default logDoctorAction;
