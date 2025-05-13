"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTrainer = exports.updateTrainer = exports.createTrainer = exports.getTrainer = exports.getAllTrainers = void 0;
const Trainer_1 = require("../models/Trainer");
// Get all trainers
const getAllTrainers = async (req, res) => {
    try {
        const trainers = await Trainer_1.Trainer.find().sort({ createdAt: -1 });
        res.status(200).json(trainers);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching trainers', error });
    }
};
exports.getAllTrainers = getAllTrainers;
// Get a single trainer
const getTrainer = async (req, res) => {
    try {
        const trainer = await Trainer_1.Trainer.findById(req.params.id);
        if (!trainer) {
            return res.status(404).json({ message: 'Trainer not found' });
        }
        res.status(200).json(trainer);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching trainer', error });
    }
};
exports.getTrainer = getTrainer;
// Create a new trainer
const createTrainer = async (req, res) => {
    try {
        const trainer = new Trainer_1.Trainer(req.body);
        await trainer.save();
        res.status(201).json(trainer);
    }
    catch (error) {
        res.status(400).json({ message: 'Error creating trainer', error });
    }
};
exports.createTrainer = createTrainer;
// Update a trainer
const updateTrainer = async (req, res) => {
    try {
        const trainer = await Trainer_1.Trainer.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!trainer) {
            return res.status(404).json({ message: 'Trainer not found' });
        }
        res.status(200).json(trainer);
    }
    catch (error) {
        res.status(400).json({ message: 'Error updating trainer', error });
    }
};
exports.updateTrainer = updateTrainer;
// Delete a trainer
const deleteTrainer = async (req, res) => {
    try {
        const trainer = await Trainer_1.Trainer.findByIdAndDelete(req.params.id);
        if (!trainer) {
            return res.status(404).json({ message: 'Trainer not found' });
        }
        res.status(200).json({ message: 'Trainer deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting trainer', error });
    }
};
exports.deleteTrainer = deleteTrainer;
