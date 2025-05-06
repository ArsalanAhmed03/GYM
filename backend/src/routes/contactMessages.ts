import express from 'express';
import ContactMessage from '../models/ContactMessage';
import nodemailer from 'nodemailer';

const router = express.Router();

router.post('/', async (req: express.Request, res: express.Response): Promise<any> =>{
  const { name, email, message } = req.body as {
    name: string;
    email: string;
    message: string;
  };

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Store in DB
    const newMsg = await ContactMessage.create({ name, email, message });

    // Send email to admin
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    await transporter.sendMail({
      from: `"Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Contact Us Message',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b> ${message}</p>`
    });

    return res.status(201).json({ message: 'Message sent successfully.' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Failed to send message.' });
  }
});

export default router;