import { mailOptions, sendEmail } from './config';
import { baseDevUrl } from '../config/config';

export const sendEmailVerificationLink = (app, user, token) => {
  //  console.log(token)
     
  const link = `${baseDevUrl(app)}/verifyemail/${token}`;
  // console.log(link)
  const subject = 'Verify Email address';

  const text = `Hi ${user.username} `;

  const html = `
        <h3>Email verification</h3>
        <p>Thanks for registering , please verify your email by clicking on the verfication link below</p> <br/>
        <a href="${link}">Verfication link</a>
    `;

  const options = mailOptions('"ToShare Team" <aekrizi@gmail.com>', user.email, subject, text, html);

  sendEmail(options);
};