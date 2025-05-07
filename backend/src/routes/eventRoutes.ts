import express from 'express';
import { getEvents, createEvent } from '../controllers/eventController';

const router = express.Router();

// GET /api/events
router.get('/', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const events = await getEvents(req, res, next);
    res.status(200).json(events); // Remove the return statement
  } catch (error) {
    console.error('Error fetching events:', error);
    next(error); // Remove the return statement
  }
});

// POST /api/events
router.post('/', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const event = await createEvent(req, res, next);
    res.status(201).json(event); // Remove the return statement
  } catch (error) {
    console.error('Error creating event:', error);
    next(error); // Remove the return statement
  }
});

export default router;