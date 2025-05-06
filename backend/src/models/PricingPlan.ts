import mongoose from 'mongoose';

const pricingPlanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  billingPeriod: {
    type: String,
    enum: ['monthly', 'quarterly', 'yearly'],
    required: true,
  },
  features: [{
    name: {
      type: String,
      required: true,
    },
    included: {
      type: Boolean,
      default: false,
    }
  }],
  tierLevel: {
    type: Number,
    required: true,
    min: 1,
    max: 3,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
});

// Update the updatedAt timestamp before saving
pricingPlanSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

export const PricingPlan = mongoose.model('PricingPlan', pricingPlanSchema); 