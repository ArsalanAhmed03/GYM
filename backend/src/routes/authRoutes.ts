import express, { RequestHandler } from 'express';
import { body } from 'express-validator';
import { login, signup } from '../controllers/authController';

const router = express.Router();

// Validation middleware
const validateSignup = [
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
  body('name').notEmpty().withMessage('Name is required')
];

const validateLogin = [
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('password').notEmpty().withMessage('Password is required')
];

router.post('/signup', validateSignup, signup as RequestHandler);
router.post('/login', validateLogin, login as RequestHandler);

export default router; 