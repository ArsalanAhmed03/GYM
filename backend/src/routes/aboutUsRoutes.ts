import express from 'express';
import { getAboutUs, updateAboutUs } from '../controllers/aboutUsController';
import { authenticate } from '../middleware/auth';


const router = express.Router();

// Public route to get About Us information
router.get('/', getAboutUs);

// Protected route to update About Us information (admin only)
router.post('/', authenticate, updateAboutUs);

export default router; 