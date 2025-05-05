import express, { RequestHandler } from 'express';
import {
  getAllPricingPlans,
  getPricingPlan,
  createPricingPlan,
  updatePricingPlan,
  deletePricingPlan,
  updateUserPlan
} from '../controllers/pricingPlanController';
import { isAdmin } from '../middleware/auth';

const router = express.Router();

// Public routes
router.get('/', getAllPricingPlans as RequestHandler);
router.get('/:id', getPricingPlan as RequestHandler);

// Protected routes (admin only)
router.post('/', isAdmin, createPricingPlan as RequestHandler);
router.put('/:id', isAdmin, updatePricingPlan as RequestHandler);
router.delete('/:id', isAdmin, deletePricingPlan as RequestHandler);

// User plan update route
router.post('/update-user-plan', updateUserPlan as RequestHandler);

export default router; 