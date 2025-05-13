"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const trainerController_1 = require("../controllers/trainerController");
const router = express_1.default.Router();
// GET all trainers
router.get('/', trainerController_1.getAllTrainers);
// GET single trainer
router.get('/:id', trainerController_1.getTrainer);
// POST new trainer
router.post('/', trainerController_1.createTrainer);
// PUT update trainer
router.put('/:id', trainerController_1.updateTrainer);
// DELETE trainer
router.delete('/:id', trainerController_1.deleteTrainer);
exports.default = router;
