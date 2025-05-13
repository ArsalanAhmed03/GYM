"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PricingPlan = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const pricingPlanSchema = new mongoose_1.default.Schema({
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
pricingPlanSchema.pre('save', function (next) {
    this.updatedAt = new Date();
    next();
});
exports.PricingPlan = mongoose_1.default.model('PricingPlan', pricingPlanSchema);
