import express from 'express';
import HealthyRecipe from '../models/HealthyRecipe';

const router = express.Router();

// GET /api/healthy-recipes
router.get('/', async (req, res) => {
  try {
    const recipes = await HealthyRecipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch healthy recipes' });
  }
});

export default router; 