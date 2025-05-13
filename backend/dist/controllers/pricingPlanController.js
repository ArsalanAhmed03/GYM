"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserPlan = exports.deletePricingPlan = exports.updatePricingPlan = exports.createPricingPlan = exports.getPricingPlan = exports.getAllPricingPlans = void 0;
const PricingPlan_1 = require("../models/PricingPlan");
const User_1 = __importDefault(require("../models/User"));
// Get all pricing plans
const getAllPricingPlans = async (req, res) => {
    try {
        const plans = await PricingPlan_1.PricingPlan.find({ isActive: true }).sort({ tierLevel: 1 });
        res.status(200).json(plans);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching pricing plans', error });
    }
};
exports.getAllPricingPlans = getAllPricingPlans;
// Get a single pricing plan
const getPricingPlan = async (req, res) => {
    try {
        const plan = await PricingPlan_1.PricingPlan.findById(req.params.id);
        if (!plan) {
            return res.status(404).json({ message: 'Pricing plan not found' });
        }
        res.status(200).json(plan);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching pricing plan', error });
    }
};
exports.getPricingPlan = getPricingPlan;
// Create a new pricing plan (admin only)
const createPricingPlan = async (req, res) => {
    try {
        const plan = new PricingPlan_1.PricingPlan(req.body);
        await plan.save();
        res.status(201).json(plan);
    }
    catch (error) {
        res.status(400).json({ message: 'Error creating pricing plan', error });
    }
};
exports.createPricingPlan = createPricingPlan;
// Update a pricing plan (admin only)
const updatePricingPlan = async (req, res) => {
    try {
        const plan = await PricingPlan_1.PricingPlan.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!plan) {
            return res.status(404).json({ message: 'Pricing plan not found' });
        }
        res.status(200).json(plan);
    }
    catch (error) {
        res.status(400).json({ message: 'Error updating pricing plan', error });
    }
};
exports.updatePricingPlan = updatePricingPlan;
// Delete a pricing plan (admin only)
const deletePricingPlan = async (req, res) => {
    try {
        const plan = await PricingPlan_1.PricingPlan.findByIdAndDelete(req.params.id);
        if (!plan) {
            return res.status(404).json({ message: 'Pricing plan not found' });
        }
        res.status(200).json({ message: 'Pricing plan deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting pricing plan', error });
    }
};
exports.deletePricingPlan = deletePricingPlan;
// Update user's current plan
const updateUserPlan = async (req, res) => {
    try {
        const { userId, planId } = req.body;
        // Verify the plan exists
        const plan = await PricingPlan_1.PricingPlan.findById(planId);
        if (!plan) {
            return res.status(404).json({ message: 'Pricing plan not found' });
        }
        // Update user's current plan
        const user = await User_1.default.findByIdAndUpdate(userId, { currentPlan: planId }, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'Plan updated successfully', user });
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating user plan', error });
    }
};
exports.updateUserPlan = updateUserPlan;
