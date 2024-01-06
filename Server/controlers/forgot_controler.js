// user_controller.js

import User from '../models/user_model.js';
import nodemailer from 'nodemailer';

const sendPasswordResetEmail = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Generate a reset token
    const resetToken = Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);

    // Set the reset token and its expiry time (e.g., 1 hour from now)
    user.resetToken = resetToken;
    user.resetTokenExpiry = new Date(Date.now() + 3600000); // 1 hour in milliseconds

    // Save the updated user with the reset token
    await user.save();

    // Send a reset email
    const transporter = nodemailer.createTransport({
      // configure your email transporter here
      // For example, using SMTP:
      host: 'smtp.example.com',
      port: 587,
      secure: false,
      auth: {
        user: 'your-email@example.com',
        pass: 'your-email-password',
      },
    });

    const mailOptions = {
      from: 'your-email@example.com',
      to: user.email,
      subject: 'Password Reset',
      text: `Click the following link to reset your password: 
            http://your-website.com/reset-password/${resetToken}`,
    };

    await transporter.sendMail(mailOptions);

    res.json({ message: 'Password reset email sent. Check your email for instructions.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { sendPasswordResetEmail };
