import doctorModel from '../models/doctor.model.js';
//import addtohistory from '../api/history_router.js'
import jwt from 'jsonwebtoken'


async function controllerLogin(req, res) {
  try {
    const { email, password } = req.body;

    const user = await doctorModel.findOne({ email });

    if (!user) {
      return res.status(401).json({
        status: "FAILED",
        message: "Email not found",
      });
    }

    const passwordMatch = await user.comparePassword(password);

    if (!passwordMatch) {
      return res.status(401).json({
        status: "FAILED",
        message: "Incorrect password",
      });
    }
    // generate jwt token
    const token = jwt.sign({
      userId: user._id,
        email: user.email,
        name: user.name,
        last_name: user.last_name
    }, process.env.JWT_SECRET || 'secret', {
      expiresIn: 36000
    })

    //const currentTime = new Date();
    //addtohistory({'user logged in', currentTime});
// Add action and date to history
doctor.history.push({
  action:   `user logged in`,
  date: new Date(),
});
    return res.json({
      status: "SUCCESS",
      message: "Login successful",
      token
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      status: "FAILED",
      message: "An error occurred during login",
    });
  }
}



export default controllerLogin;
