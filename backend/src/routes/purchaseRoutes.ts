import express, { RequestHandler } from 'express';
import { processPurchase, getPurchaseHistory } from '../controllers/purchaseController';
import { authenticate } from '../middleware/auth';

const router = express.Router();

// All purchase routes require authentication
router.use(authenticate);

router.post('/checkout', processPurchase as RequestHandler);
router.get('/history', getPurchaseHistory as RequestHandler);

export default router; 