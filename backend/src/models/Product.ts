import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  price: number;
  category?: string;
  description?: string;
  imageUrl?: string;
  stock: number;
}

const ProductSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String },
  description: { type: String },
  imageUrl: { type: String },
  stock: { type: Number, default: 1 }
}, { timestamps: true });

export default mongoose.model<IProduct>('Product', ProductSchema); 