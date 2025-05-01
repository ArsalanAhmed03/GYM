import express, { RequestHandler } from 'express';
import { login, createAdmin } from '../controllers/adminController';

const router = express.Router();

// Admin login route
router.post('/login', login as RequestHandler);

// Create admin route (protected, should be removed in production)
router.post('/create', createAdmin as RequestHandler);

export default router; 