import mongoose, { Document, Schema } from 'mongoose';

export interface IPurchaseItem {
  productId: mongoose.Types.ObjectId;
  quantity: number;
  priceAtPurchase: number;
}

export interface IPurchase extends Document {
  userId: mongoose.Types.ObjectId;
  items: IPurchaseItem[];
  totalAmount: number;
  status: 'pending' | 'completed' | 'cancelled';
  purchaseDate: Date;
}

const PurchaseItemSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
  priceAtPurchase: { type: Number, required: true }
});

const PurchaseSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  items: [PurchaseItemSchema],
  totalAmount: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ['pending', 'completed', 'cancelled'],
    default: 'pending'
  },
  purchaseDate: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model<IPurchase>('Purchase', PurchaseSchema); 