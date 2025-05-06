import express, {
  Request,
  Response,
  NextFunction,
  RequestHandler
} from 'express';
import ContactMessage from '../models/ContactMessage';
import nodemailer from 'nodemailer';

const router = express.Router();

const contactFormHandler: RequestHandler = async (
  req,
  res,
  next
): Promise<void> => {
  const { name, email, message } = req.body as {
    name: string;
    email: string;
    message: string;
  };

  if (!name || !email || !message) {
    res.status(400).json({ message: 'All fields are required.' });
    return;                  // ← just return void here
  }

  try {
    await ContactMessage.create({ name, email, message });

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
      html: `<p><b>Name:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Message:</b> ${message}</p>`
    });

    res.status(201).json({ message: 'Message sent successfully.' });
    return;                  // ← again, just return void
  } catch (err) {
    console.error(err);
    next(err);               // pass to Express’s error handler
    return;
  }
};

router.post('/', contactFormHandler);

export default router;
