import { Request, Response } from 'express';
import { PricingPlan } from '../models/PricingPlan';
import User from '../models/User';

// Get all pricing plans
export const getAllPricingPlans = async (req: Request, res: Response) => {
  try {
    const plans = await PricingPlan.find({ isActive: true }).sort({ tierLevel: 1 });
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching pricing plans', error });
  }
};

// Get a single pricing plan
export const getPricingPlan = async (req: Request, res: Response) => {
  try {
    const plan = await PricingPlan.findById(req.params.id);
    if (!plan) {
      return res.status(404).json({ message: 'Pricing plan not found' });
    }
    res.status(200).json(plan);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching pricing plan', error });
  }
};

// Create a new pricing plan (admin only)
export const createPricingPlan = async (req: Request, res: Response) => {
  try {
    const plan = new PricingPlan(req.body);
    await plan.save();
    res.status(201).json(plan);
  } catch (error) {
    res.status(400).json({ message: 'Error creating pricing plan', error });
  }
};

// Update a pricing plan (admin only)
export const updatePricingPlan = async (req: Request, res: Response) => {
  try {
    const plan = await PricingPlan.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!plan) {
      return res.status(404).json({ message: 'Pricing plan not found' });
    }
    res.status(200).json(plan);
  } catch (error) {
    res.status(400).json({ message: 'Error updating pricing plan', error });
  }
};

// Delete a pricing plan (admin only)
export const deletePricingPlan = async (req: Request, res: Response) => {
  try {
    const plan = await PricingPlan.findByIdAndDelete(req.params.id);
    if (!plan) {
      return res.status(404).json({ message: 'Pricing plan not found' });
    }
    res.status(200).json({ message: 'Pricing plan deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting pricing plan', error });
  }
};

// Update user's current plan
export const updateUserPlan = async (req: Request, res: Response) => {
  try {
    const { userId, planId } = req.body;
    
    // Verify the plan exists
    const plan = await PricingPlan.findById(planId);
    if (!plan) {
      return res.status(404).json({ message: 'Pricing plan not found' });
    }

    // Update user's current plan
    const user = await User.findByIdAndUpdate(
      userId,
      { currentPlan: planId },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'Plan updated successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user plan', error });
  }
}; 