import express, { RequestHandler } from 'express';
import { 
  getProducts, 
  getProduct, 
  createProduct, 
  updateProduct, 
  deleteProduct 
} from '../controllers/productController';
import { isAdmin } from '../middleware/auth';

const router = express.Router();

// Public routes
router.get('/', getProducts as RequestHandler);
router.get('/:id', getProduct as RequestHandler);

// Admin-only routes
router.post('/', isAdmin, createProduct as RequestHandler);
router.put('/:id', isAdmin, updateProduct as RequestHandler);
router.delete('/:id', isAdmin, deleteProduct as RequestHandler);

export default router; 