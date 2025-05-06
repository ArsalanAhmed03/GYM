import express from 'express';
import { getEvents, createEvent } from '../controllers/eventController';

const router = express.Router();

// GET  /api/events
router.get('/', getEvents);

// POST /api/events
router.post('/', createEvent);

export default router;
