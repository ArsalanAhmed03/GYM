import { Request, Response, NextFunction } from 'express';
import Event, { IEvent } from '../models/Event';

export const getEvents = async (req: Request, res: Response<IEvent[] | { message: string }>, next: NextFunction) => {
  try {
    const events = await Event.find({});
    return res.status(200).json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    return res.status(500).json({ message: 'Server error fetching events.' });
  }
};

export const createEvent = async (req: Request, res: Response<IEvent | { message: string; error?: any }>) => {
  try {
    const event = new Event(req.body);
    await event.save();
    return res.status(201).json(event);
  } catch (error) {
    console.error('Error creating event:', error);
    return res.status(400).json({ message: 'Error creating event', error });
  }
};
