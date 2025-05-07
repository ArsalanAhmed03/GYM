import { Request, Response, NextFunction } from 'express';
import Event, { IEvent } from '../models/Event';

// Get all events
export const getEvents = async (req: Request, res: Response<IEvent[] | { message: string }>, next: NextFunction) => {
  try {
    const events = await Event.find({}); // Fetch events from the DB
    return res.status(200).json(events); // Return the events as a JSON response
  } catch (error) {
    console.error('Error fetching events:', error);
    return next(error); // Use next() to handle the error
  }
};

// Create a new event
export const createEvent = async (req: Request, res: Response<IEvent | { message: string; error?: any }>, next: NextFunction) => {
  try {
    const { name, date, description } = req.body; // Extract data from the request body
    const event = new Event({ name, date, description }); // Create the event
    await event.save(); // Save the event to the database
    return res.status(201).json(event); // Return the newly created event
  } catch (error) {
    console.error('Error creating event:', error);
    return next(error); // Use next() to handle the error
  }
};
