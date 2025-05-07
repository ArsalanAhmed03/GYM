import mongoose, { Schema, Document } from 'mongoose';

// Define the IEvent interface for the Event schema
export interface IEvent extends Document {
  name: string;
  date: string;
  description: string;
  createdAt: Date;
}

// Create the schema for the event
const eventSchema: Schema = new Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Export the model and interface together
const Event = mongoose.model<IEvent>('Event', eventSchema);

export default Event;
