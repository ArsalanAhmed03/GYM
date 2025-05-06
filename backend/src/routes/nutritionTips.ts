import express from 'express';
import NutritionTip from '../models/NutritionTip';

const router = express.Router();

// GET /api/nutrition-tips
router.get('/', async (req, res) => {
  try {
    const tips = await NutritionTip.find();
    res.json(tips);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch nutrition tips' });
  }
});

export default router; 