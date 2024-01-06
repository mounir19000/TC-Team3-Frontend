import doctorModel from '../models/doctor.model.js';
import bcrypt from 'bcrypt';
import { generateUniqueToken, sendVerificationEmail } from '../utility/emailutils.js';

async function controllersignup(req, res) {
  try {
    const { name, last_name, email, password, date_of_birth,profession} = req.body;

  
    const existingUser = await doctorModel.findOne({ email });

    if (existingUser) {
      return res.json({
        status: "FAILED",
        message: "Email already exists",
      });
    }

    // hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    
    const verificationToken = generateUniqueToken();

    
    const newDoctor = new doctorModel({
      name,
      last_name,
      email,
      password: hashedPassword,
      date_of_birth,
      profession,
      verificationToken,
    });

    // Save
    const savedDoctor = await newDoctor.save();

    // verification email
    sendVerificationEmail(savedDoctor.email, verificationToken);

    res.json({
      status: "SUCCESS",
      message: "Signup successful. Check your email for verification.",
      data: savedDoctor,
    });
  } catch (error) {
    console.error(error);

    res.json({
      status: "FAILED",
      message: "An error occurred during signup",
    });
  }
}

export default controllersignup;
