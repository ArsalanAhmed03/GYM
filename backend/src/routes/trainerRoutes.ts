import express, { RequestHandler } from 'express';
import {
  getAllTrainers,
  getTrainer,
  createTrainer,
  updateTrainer,
  deleteTrainer
} from '../controllers/trainerController';

const router = express.Router();

// GET all trainers
router.get('/', getAllTrainers as RequestHandler);

// GET single trainer
router.get('/:id', getTrainer as RequestHandler);

// POST new trainer
router.post('/', createTrainer as RequestHandler);

// PUT update trainer
router.put('/:id', updateTrainer as RequestHandler);

// DELETE trainer
router.delete('/:id', deleteTrainer as RequestHandler);

export default router; 