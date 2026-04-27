import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

interface ISendEmail {
  email: string;
  html: string;
  subject: string;
  name: string;
  mobile: string;
  role: string;
  website: string;
}

async function sendEmail(props: ISendEmail) {
  // Debug: Verificar variables de entorno
  console.log('EMAIL_HOST:', process.env.EMAIL_HOST);
  console.log('EMAIL:', process.env.EMAIL);
  console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '*** SET ***' : 'NOT SET');
  console.log('EMAIL_PORT:', process.env.EMAIL_PORT);
  
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false // permite conexiones TLS con certificados auto-firmados
    }
  });

  let message = {
    from: "cmiros.22@gmail.com",
    to: "cmiros.22@gmail.com",
    subject: props.subject,
    name: props.name,
    html: `<h1>Contact Form</h1><br>
      <b>Name</b>: ${props.name}<br> 
      <b>Email</b>: ${props.email}<br>
      <b>Message</b>: ${props.html}<br>
      <b>Mobile</b>: ${props.mobile}<br>
      <b>Role</b>: ${props.role}<br>
      <b>Website</b>: ${props.website}<br>`
  };

  let info = await transporter.sendMail(message);
  return info;
}

export { sendEmail };
