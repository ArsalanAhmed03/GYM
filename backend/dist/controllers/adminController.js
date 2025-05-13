"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdmin = exports.login = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Admin_1 = __importDefault(require("../models/Admin"));
const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        // Find admin by username
        const admin = await Admin_1.default.findOne({ username });
        if (!admin) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }
        // Check password
        const isMatch = await admin.comparePassword(password);
        if (!isMatch) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }
        // Generate JWT token
        const token = jsonwebtoken_1.default.sign({ id: admin._id, username: admin.username }, process.env.JWT_SECRET || 'your-secret-key', { expiresIn: '1d' });
        res.json({ token });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
exports.login = login;
const createAdmin = async (req, res) => {
    try {
        const { username, password } = req.body;
        // Check if admin already exists
        const existingAdmin = await Admin_1.default.findOne({ username });
        if (existingAdmin) {
            res.status(400).json({ message: 'Admin already exists' });
            return;
        }
        // Create new admin
        const admin = new Admin_1.default({ username, password });
        await admin.save();
        res.status(201).json({ message: 'Admin created successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
exports.createAdmin = createAdmin;
