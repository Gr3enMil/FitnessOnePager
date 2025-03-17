// /app/api/sendEmail/route.js
import nodemailer from 'nodemailer';

export async function POST(request) {
  const { firstName, lastName, email, phone, service, goal, message } = await request.json();

  // Vytvoření transportéru pro SMTP pomocí Seznam.cz
  const transporter = nodemailer.createTransport({
    host: 'smtp.seznam.cz',
    port: 465,
    secure: true, // true pro SSL
    auth: {
      user: process.env.SMTP_USER, // Email ze .env.local
      pass: process.env.SMTP_PASS, // Heslo ze .env.local
    },
  });

  const mailOptionsToAdmin = {
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER,
    subject: 'Nová poptávka konzultace',
    text: `
      Jméno: ${firstName} 
      Email: ${email}
      Telefon: ${phone}
      
      Zpráva: ${message}
    `,
  };

  const mailOptionsToUser = {
    from: process.env.SMTP_USER,
    to: email,
    subject: 'Potvrzení poptávky konzultace',
    text: `Dobrý den,

Děkujeme za Vaši poptávku. Ozveme se Vám co nejdříve.

S pozdravem, Barbara`,
  };

  try {
    await transporter.sendMail(mailOptionsToAdmin);
    await transporter.sendMail(mailOptionsToUser);
    
    return new Response('Emails sent successfully', { status: 200 });
  } catch (error) {
    console.error('Error sending emails:', error);
    return new Response('Failed to send emails', { status: 500 });
  }
}
