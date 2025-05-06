import mongoose, { Schema, Document } from 'mongoose';

export interface IHealthyRecipe extends Document {
  title: string;
  description: string;
  calories: number;
}

const HealthyRecipeSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  calories: { type: Number, required: true },
});

export default mongoose.model<IHealthyRecipe>('HealthyRecipe', HealthyRecipeSchema); 