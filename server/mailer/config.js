/* eslint-disable no-console */
import nodemailer from 'nodemailer';
import { mailer } from '../config/config';
import smtpTransport from 'nodemailer-smtp-transport';


const transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: mailer.userMailer,
    pass: mailer.passMailer,
  }
}));



export const mailOptions = (from = '', to, subject, text, html) => ({
  from,
  to,
  subject,
  text,
  html,
});



export const sendEmail = (options) => {

  transporter.sendMail(options, (error, info) => {

    if (error) console.log('error email: ', error);
    // console.log(`message ${info} `);
    // smtpTransport.close();  
  });
};
