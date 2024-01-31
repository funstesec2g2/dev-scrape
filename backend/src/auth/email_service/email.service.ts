import * as nodemailer from 'nodemailer';
import { randomBytes } from 'crypto';

export const sendVerificationEmail = async (email: string, verificationCode: string) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: false,
    port: 587,
    auth: {
      user: 'funstesec2g2@gmail.com',
      pass: 'mgac fapr xflz pbay',
    },
  });

  const mailOptions = {
    from: { address: 'funstesec2g2@gmail.com' },
    to: email,
    subject: 'Email Verification Code',
    text: `Your verification code is: ${verificationCode}`,
  };

  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      throw new Error(error);
    }
    console.log('Verification Email sent: ' + info.response);
  });
};

export const sendForgotPasswordEmail = async (email: string, newPassword: string) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: false,
    port: 587,
    auth: {
      user: 'funstesec2g2@gmail.com',
      pass: 'mgac fapr xflz pbay',
    },
  });

  const mailOptions = {
    from: { address: 'funstesec2g2@gmail.com' },
    to: email,
    subject: 'Password Reset',
    text: `Your new password is: ${newPassword}`,
  };

  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      throw new Error(error);
    }
    console.log('Forgot Password Email sent: ' + info.response);
  });
};

export const generateVerificationCode = (): string => {
  return randomBytes(4).toString('hex').toUpperCase();
};
