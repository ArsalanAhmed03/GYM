"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const eventController_1 = require("../controllers/eventController");
const router = express_1.default.Router();
// GET /api/events
router.get('/', async (req, res, next) => {
    try {
        const events = await (0, eventController_1.getEvents)(req, res, next);
        res.status(200).json(events); // Remove the return statement
    }
    catch (error) {
        console.error('Error fetching events:', error);
        next(error); // Remove the return statement
    }
});
// POST /api/events
router.post('/', async (req, res, next) => {
    try {
        const event = await (0, eventController_1.createEvent)(req, res, next);
        res.status(201).json(event); // Remove the return statement
    }
    catch (error) {
        console.error('Error creating event:', error);
        next(error); // Remove the return statement
    }
});
exports.default = router;
