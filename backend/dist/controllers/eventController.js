"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEvent = exports.getEvents = void 0;
const Event_1 = __importDefault(require("../models/Event"));
// Get all events
const getEvents = async (req, res, next) => {
    try {
        const events = await Event_1.default.find({}); // Fetch events from the DB
        return res.status(200).json(events); // Return the events as a JSON response
    }
    catch (error) {
        console.error('Error fetching events:', error);
        return next(error); // Use next() to handle the error
    }
};
exports.getEvents = getEvents;
// Create a new event
const createEvent = async (req, res, next) => {
    try {
        const { name, date, description } = req.body; // Extract data from the request body
        const event = new Event_1.default({ name, date, description }); // Create the event
        await event.save(); // Save the event to the database
        return res.status(201).json(event); // Return the newly created event
    }
    catch (error) {
        console.error('Error creating event:', error);
        return next(error); // Use next() to handle the error
    }
};
exports.createEvent = createEvent;
