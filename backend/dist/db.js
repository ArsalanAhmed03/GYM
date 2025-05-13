"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables
dotenv_1.default.config();
const connectDB = async () => {
    try {
        // Debug: Log the MongoDB URI (without password)
        const mongoURI = process.env.MONGODB_URI;
        console.log('Attempting to connect to MongoDB...');
        console.log('MongoDB URI:', mongoURI?.replace(/\/\/[^@]+@/, '//****:****@'));
        if (!mongoURI) {
            throw new Error('MONGODB_URI is not defined in .env file');
        }
        await mongoose_1.default.connect(mongoURI, {
            serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
            socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
        });
        console.log('MongoDB connected successfully');
    }
    catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};
exports.default = connectDB;
