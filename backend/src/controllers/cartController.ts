import { Request, Response } from 'express';
import Cart from '../models/Cart';
import Product from '../models/Product';

// Get user's cart with populated product details
export const getCart = async (req: Request, res: Response): Promise<void> => {
  try {
    const cart = await Cart.findOne({ userId: req.user._id })
      .populate('items.productId');
    
    if (!cart) {
      // Create new cart if none exists
      const newCart = new Cart({ userId: req.user._id, items: [] });
      await newCart.save();
      res.json(newCart);
      return;
    }
    
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cart', error });
  }
};

// Add product to cart or increase quantity
export const addToCart = async (req: Request, res: Response): Promise<void> => {
  try {
    const { productId, quantity = 1 } = req.body;
    
    // Check if product exists
    const product = await Product.findById(productId);
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }

    // Check if product is in stock
    if (product.stock < quantity) {
      res.status(400).json({ message: 'Not enough stock available' });
      return;
    }

    let cart = await Cart.findOne({ userId: req.user._id });
    
    if (!cart) {
      // Create new cart if none exists
      cart = new Cart({
        userId: req.user._id,
        items: [{ productId, quantity }]
      });
    } else {
      // Check if product already in cart
      const existingItem = cart.items.find(
        item => item.productId.toString() === productId
      );

      if (existingItem) {
        // Update quantity if product exists
        existingItem.quantity += quantity;
      } else {
        // Add new item if product doesn't exist
        cart.items.push({ productId, quantity });
      }
    }

    await cart.save();
    const updatedCart = await Cart.findById(cart._id).populate('items.productId');
    res.json(updatedCart);
  } catch (error) {
    res.status(500).json({ message: 'Error adding to cart', error });
  }
};

// Update product quantity in cart
export const updateQuantity = async (req: Request, res: Response): Promise<void> => {
  try {
    const { productId, quantity } = req.body;
    
    const cart = await Cart.findOne({ userId: req.user._id });
    if (!cart) {
      res.status(404).json({ message: 'Cart not found' });
      return;
    }

    const itemIndex = cart.items.findIndex(
      item => item.productId.toString() === productId
    );

    if (itemIndex === -1) {
      res.status(404).json({ message: 'Product not found in cart' });
      return;
    }

    // Update quantity directly
    cart.items[itemIndex].quantity = quantity;

    await cart.save();
    const updatedCart = await Cart.findById(cart._id).populate('items.productId');
    res.json(updatedCart);
  } catch (error) {
    res.status(500).json({ message: 'Error updating quantity', error });
  }
};

// Remove product from cart
export const removeFromCart = async (req: Request, res: Response): Promise<void> => {
  try {
    const { productId, removeCompletely } = req.body;
    
    const cart = await Cart.findOne({ userId: req.user._id });
    if (!cart) {
      res.status(404).json({ message: 'Cart not found' });
      return;
    }

    if (removeCompletely) {
      // Remove the item completely
      cart.items = cart.items.filter(
        item => item.productId.toString() !== productId
      );
    } else {
      // Decrease quantity by 1
      const itemIndex = cart.items.findIndex(
        item => item.productId.toString() === productId
      );

      if (itemIndex === -1) {
        res.status(404).json({ message: 'Product not found in cart' });
        return;
      }

      if (cart.items[itemIndex].quantity <= 1) {
        cart.items.splice(itemIndex, 1);
      } else {
        cart.items[itemIndex].quantity -= 1;
      }
    }

    await cart.save();
    const updatedCart = await Cart.findById(cart._id).populate('items.productId');
    res.json(updatedCart);
  } catch (error) {
    res.status(500).json({ message: 'Error removing from cart', error });
  }
};

// Clear entire cart
export const clearCart = async (req: Request, res: Response): Promise<void> => {
  try {
    const cart = await Cart.findOne({ userId: req.user._id });
    if (!cart) {
      res.status(404).json({ message: 'Cart not found' });
      return;
    }

    cart.items = [];
    await cart.save();
    res.json({ message: 'Cart cleared successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error clearing cart', error });
  }
}; 