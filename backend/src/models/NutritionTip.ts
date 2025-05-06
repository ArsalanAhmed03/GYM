import mongoose, { Schema, Document } from 'mongoose';

export interface INutritionTip extends Document {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}

const NutritionTipSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

export default mongoose.model<INutritionTip>('NutritionTip', NutritionTipSchema); 