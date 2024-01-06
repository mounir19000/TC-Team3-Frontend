
import express from 'express';
import doctorModel from '../models/doctor.model.js';

const router = express.Router();

router.get('/verify/:token', async (req, res) => {
  try {
    const { token } = req.params;

    
    const doctor = await doctorModel.findOne({ verificationToken: token });

    if (!doctor) {
      return res.status(404).json({
        status: "FAILED",
        message: "Invalid verification token",
      });
    }

    // Mark the doctor's email as verified
    doctor.isVerified = true;
    doctor.verificationToken = undefined;
    await doctor.save();

    res.json({
      status: "SUCCESS",
      message: "Email verified successfully.",
      data: doctor,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      status: "FAILED",
      message: "An error occurred during email verification",
    });
  }
});

export default router;
