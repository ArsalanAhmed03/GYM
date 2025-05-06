import { Request, Response } from 'express';
import { Trainer } from '../models/Trainer';

// Get all trainers
export const getAllTrainers = async (req: Request, res: Response) => {
  try {
    const trainers = await Trainer.find().sort({ createdAt: -1 });
    res.status(200).json(trainers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching trainers', error });
  }
};

// Get a single trainer
export const getTrainer = async (req: Request, res: Response) => {
  try {
    const trainer = await Trainer.findById(req.params.id);
    if (!trainer) {
      return res.status(404).json({ message: 'Trainer not found' });
    }
    res.status(200).json(trainer);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching trainer', error });
  }
};

// Create a new trainer
export const createTrainer = async (req: Request, res: Response) => {
  try {
    const trainer = new Trainer(req.body);
    await trainer.save();
    res.status(201).json(trainer);
  } catch (error) {
    res.status(400).json({ message: 'Error creating trainer', error });
  }
};

// Update a trainer
export const updateTrainer = async (req: Request, res: Response) => {
  try {
    const trainer = await Trainer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!trainer) {
      return res.status(404).json({ message: 'Trainer not found' });
    }
    res.status(200).json(trainer);
  } catch (error) {
    res.status(400).json({ message: 'Error updating trainer', error });
  }
};

// Delete a trainer
export const deleteTrainer = async (req: Request, res: Response) => {
  try {
    const trainer = await Trainer.findByIdAndDelete(req.params.id);
    if (!trainer) {
      return res.status(404).json({ message: 'Trainer not found' });
    }
    res.status(200).json({ message: 'Trainer deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting trainer', error });
  }
}; 