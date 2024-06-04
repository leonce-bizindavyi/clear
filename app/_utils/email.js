const nodemailer = require('nodemailer');

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_ADDRESS,
      pass: process.env.SMTP_PASSWORD
    }
  });
