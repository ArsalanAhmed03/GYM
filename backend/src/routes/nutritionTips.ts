import express, { Request, Response, NextFunction } from 'express';
import NutritionTip, { INutritionTip } from '../models/NutritionTip';

const router = express.Router();

// GET /api/nutrition-tips
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tips: INutritionTip[] = await NutritionTip.find({});
    res.json(tips);
  } catch (err) {
    console.error('Error fetching nutrition tips:', err);
    next(err);
  }
});

export default router;
