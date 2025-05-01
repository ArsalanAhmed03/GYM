import express, { RequestHandler } from 'express';
import { 
  getCart, 
  addToCart, 
  removeFromCart, 
  clearCart,
  updateQuantity
} from '../controllers/cartController';
import { authenticate } from '../middleware/auth';

const router = express.Router();

// All cart routes require authentication
router.use(authenticate);

router.get('/', getCart as RequestHandler);
router.post('/add', addToCart as RequestHandler);
router.post('/remove', removeFromCart as RequestHandler);
router.post('/update-quantity', updateQuantity as RequestHandler);
router.post('/clear', clearCart as RequestHandler);

export default router; 