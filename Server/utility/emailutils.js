// emailUtils.js
import nodemailer from 'nodemailer';

// Configure Nodemailer with your email service credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'amel.backend@gmail.com',
    pass: '12amelbackend',
  },
});

// Function to send a verification email
export const sendVerificationEmail = (to, verificationToken) => {
  const mailOptions = {
    from: 'amel.backend@gmail.com',
    to,
    subject: 'Email Verification',
    text: `Click the following link to verify your email: http://localhost:3004/verify/${verificationToken}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending verification email:', error);
    } else {
      console.log('Verification email sent:', info.response);
    }
  });
};

// Function to generate a unique token
export const generateUniqueToken = () => {
  // This is a simple example, you might want to use a library like uuid or crypto for a more secure token
  return Math.random().toString(36).substr(2, 10);
};
