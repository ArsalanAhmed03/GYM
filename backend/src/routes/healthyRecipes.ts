import express, { Request, Response, NextFunction } from 'express';
import HealthyRecipe, { IHealthyRecipe } from '../models/HealthyRecipe';

const router = express.Router();

// GET /api/healthy-recipes
router.get(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const recipes: IHealthyRecipe[] = await HealthyRecipe.find({});
      res.json(recipes);
    } catch (err) {
      console.error('Error fetching healthy recipes:', err);
      next(err);
    }
  }
);

export default router;
