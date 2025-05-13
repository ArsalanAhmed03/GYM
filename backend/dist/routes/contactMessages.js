"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ContactMessage_1 = __importDefault(require("../models/ContactMessage"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const router = express_1.default.Router();
router.post('/', async (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ message: 'All fields are required.' });
    }
    try {
        // Store in DB
        const newMsg = await ContactMessage_1.default.create({ name, email, message });
        // Try to send email, but don't fail if it doesn't work
        try {
            if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
                const transporter = nodemailer_1.default.createTransport({
                    host: process.env.SMTP_HOST,
                    port: Number(process.env.SMTP_PORT) || 587,
                    secure: process.env.SMTP_SECURE === 'true',
                    auth: {
                        user: process.env.SMTP_USER,
                        pass: process.env.SMTP_PASS
                    }
                });
                await transporter.sendMail({
                    from: `"Contact Form" <${process.env.SMTP_USER}>`,
                    to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
                    subject: 'New Contact Us Message',
                    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
                    html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b> ${message}</p>`
                });
            }
        }
        catch (emailError) {
            console.error('Failed to send email notification:', emailError);
            // Continue execution even if email fails
        }
        return res.status(201).json({ message: 'Message sent successfully.' });
    }
    catch (err) {
        console.error('Failed to store contact message:', err);
        return res.status(500).json({ message: 'Failed to send message.' });
    }
});
exports.default = router;
