import mongoose, { Schema, Document } from 'mongoose';

export interface IEmailSubscription extends Document {
  email: string;
  subscribedAt: Date;
}

const EmailSubscriptionSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  subscribedAt: { type: Date, default: Date.now },
});

export default mongoose.model<IEmailSubscription>('EmailSubscription', EmailSubscriptionSchema); 