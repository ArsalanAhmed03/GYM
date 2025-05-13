"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearCart = exports.removeFromCart = exports.updateQuantity = exports.addToCart = exports.getCart = void 0;
const Cart_1 = __importDefault(require("../models/Cart"));
const Product_1 = __importDefault(require("../models/Product"));
// Get user's cart with populated product details
const getCart = async (req, res) => {
    try {
        const cart = await Cart_1.default.findOne({ userId: req.user._id })
            .populate('items.productId');
        if (!cart) {
            // Create new cart if none exists
            const newCart = new Cart_1.default({ userId: req.user._id, items: [] });
            await newCart.save();
            res.json(newCart);
            return;
        }
        res.json(cart);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching cart', error });
    }
};
exports.getCart = getCart;
// Add product to cart or increase quantity
const addToCart = async (req, res) => {
    try {
        const { productId, quantity = 1 } = req.body;
        // Check if product exists
        const product = await Product_1.default.findById(productId);
        if (!product) {
            res.status(404).json({ message: 'Product not found' });
            return;
        }
        // Check if product is in stock
        if (product.stock < quantity) {
            res.status(400).json({ message: 'Not enough stock available' });
            return;
        }
        let cart = await Cart_1.default.findOne({ userId: req.user._id });
        if (!cart) {
            // Create new cart if none exists
            cart = new Cart_1.default({
                userId: req.user._id,
                items: [{ productId, quantity }]
            });
        }
        else {
            // Check if product already in cart
            const existingItem = cart.items.find(item => item.productId.toString() === productId);
            if (existingItem) {
                // Update quantity if product exists
                existingItem.quantity += quantity;
            }
            else {
                // Add new item if product doesn't exist
                cart.items.push({ productId, quantity });
            }
        }
        await cart.save();
        const updatedCart = await Cart_1.default.findById(cart._id).populate('items.productId');
        res.json(updatedCart);
    }
    catch (error) {
        res.status(500).json({ message: 'Error adding to cart', error });
    }
};
exports.addToCart = addToCart;
// Update product quantity in cart
const updateQuantity = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const cart = await Cart_1.default.findOne({ userId: req.user._id });
        if (!cart) {
            res.status(404).json({ message: 'Cart not found' });
            return;
        }
        const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
        if (itemIndex === -1) {
            res.status(404).json({ message: 'Product not found in cart' });
            return;
        }
        // Update quantity directly
        cart.items[itemIndex].quantity = quantity;
        await cart.save();
        const updatedCart = await Cart_1.default.findById(cart._id).populate('items.productId');
        res.json(updatedCart);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating quantity', error });
    }
};
exports.updateQuantity = updateQuantity;
// Remove product from cart
const removeFromCart = async (req, res) => {
    try {
        const { productId, removeCompletely } = req.body;
        const cart = await Cart_1.default.findOne({ userId: req.user._id });
        if (!cart) {
            res.status(404).json({ message: 'Cart not found' });
            return;
        }
        if (removeCompletely) {
            // Remove the item completely
            cart.items = cart.items.filter(item => item.productId.toString() !== productId);
        }
        else {
            // Decrease quantity by 1
            const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
            if (itemIndex === -1) {
                res.status(404).json({ message: 'Product not found in cart' });
                return;
            }
            if (cart.items[itemIndex].quantity <= 1) {
                cart.items.splice(itemIndex, 1);
            }
            else {
                cart.items[itemIndex].quantity -= 1;
            }
        }
        await cart.save();
        const updatedCart = await Cart_1.default.findById(cart._id).populate('items.productId');
        res.json(updatedCart);
    }
    catch (error) {
        res.status(500).json({ message: 'Error removing from cart', error });
    }
};
exports.removeFromCart = removeFromCart;
// Clear entire cart
const clearCart = async (req, res) => {
    try {
        const cart = await Cart_1.default.findOne({ userId: req.user._id });
        if (!cart) {
            res.status(404).json({ message: 'Cart not found' });
            return;
        }
        cart.items = [];
        await cart.save();
        res.json({ message: 'Cart cleared successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error clearing cart', error });
    }
};
exports.clearCart = clearCart;
