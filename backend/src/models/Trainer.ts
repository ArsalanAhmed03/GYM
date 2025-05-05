import mongoose from 'mongoose';

const trainerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  specialty: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
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
trainerSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

export const Trainer = mongoose.model('Trainer', trainerSchema); 