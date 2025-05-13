import express, { RequestHandler } from 'express'; // Add RequestHandler import
import { getAboutUs, updateAboutUs } from '../controllers/aboutUsController';
import { authenticate } from '../middleware/auth';

const router = express.Router();

// Public route to get About Us information
router.get('/', authenticate, getAboutUs as RequestHandler); 

// Protected route to update About Us information (admin only)
router.post('/', authenticate, updateAboutUs);

export default router;