import { Request, Response } from 'express';
import Purchase from '../models/Purchase';
import Product from '../models/Product';
import User from '../models/User';
import Cart from '../models/Cart';

// Process purchase from cart
export const processPurchase = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user._id;
    
    // Get user's cart with populated products
    const cart = await Cart.findOne({ userId })
      .populate('items.productId');
    
    if (!cart || cart.items.length === 0) {
      res.status(400).json({ message: 'Cart is empty' });
      return;
    }

    // Calculate total and check stock
    let totalAmount = 0;
    const itemsToPurchase = [];

    for (const item of cart.items) {
      const product = item.productId as any;
      
      if (product.stock < item.quantity) {
        res.status(400).json({ 
          message: `Not enough stock for ${product.name}`,
          productId: product._id
        });
        return;
      }

      totalAmount += product.price * item.quantity;
      itemsToPurchase.push({
        productId: product._id,
        quantity: item.quantity,
        priceAtPurchase: product.price
      });
    }

    // Create purchase record
    const purchase = new Purchase({
      userId,
      items: itemsToPurchase,
      totalAmount,
      status: 'completed'
    });

    // Update product stock and user purchase history
    const session = await Purchase.startSession();
    session.startTransaction();

    try {
      // Update product stock
      for (const item of itemsToPurchase) {
        await Product.findByIdAndUpdate(
          item.productId,
          { $inc: { stock: -item.quantity } },
          { session }
        );
      }

      // Add purchase to user's history
      await User.findByIdAndUpdate(
        userId,
        { $push: { purchaseHistory: purchase._id } },
        { session }
      );

      // Save purchase
      await purchase.save({ session });

      // Clear cart
      await Cart.findByIdAndUpdate(
        cart._id,
        { $set: { items: [] } },
        { session }
      );

      await session.commitTransaction();
      res.json({ 
        message: 'Purchase completed successfully',
        purchase: await Purchase.findById(purchase._id).populate('items.productId')
      });
    } catch (error) {
      await session.abortTransaction();
      throw error;
    } finally {
      session.endSession();
    }
  } catch (error) {
    res.status(500).json({ message: 'Error processing purchase', error });
  }
};

// Get user's purchase history
export const getPurchaseHistory = async (req: Request, res: Response): Promise<void> => {
  try {
    const purchases = await Purchase.find({ userId: req.user._id })
      .populate('items.productId')
      .sort({ purchaseDate: -1 });
    
    res.json(purchases);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching purchase history', error });
  }
}; 