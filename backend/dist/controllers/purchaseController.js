"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPurchaseHistory = exports.processPurchase = void 0;
const Purchase_1 = __importDefault(require("../models/Purchase"));
const Product_1 = __importDefault(require("../models/Product"));
const User_1 = __importDefault(require("../models/User"));
const Cart_1 = __importDefault(require("../models/Cart"));
// Process purchase from cart
const processPurchase = async (req, res) => {
    try {
        const userId = req.user._id;
        // Get user's cart with populated products
        const cart = await Cart_1.default.findOne({ userId })
            .populate('items.productId');
        if (!cart || cart.items.length === 0) {
            res.status(400).json({ message: 'Cart is empty' });
            return;
        }
        // Calculate total and check stock
        let totalAmount = 0;
        const itemsToPurchase = [];
        for (const item of cart.items) {
            const product = item.productId;
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
        const purchase = new Purchase_1.default({
            userId,
            items: itemsToPurchase,
            totalAmount,
            status: 'completed'
        });
        // Update product stock and user purchase history
        const session = await Purchase_1.default.startSession();
        session.startTransaction();
        try {
            // Update product stock
            for (const item of itemsToPurchase) {
                await Product_1.default.findByIdAndUpdate(item.productId, { $inc: { stock: -item.quantity } }, { session });
            }
            // Add purchase to user's history
            await User_1.default.findByIdAndUpdate(userId, { $push: { purchaseHistory: purchase._id } }, { session });
            // Save purchase
            await purchase.save({ session });
            // Clear cart
            await Cart_1.default.findByIdAndUpdate(cart._id, { $set: { items: [] } }, { session });
            await session.commitTransaction();
            res.json({
                message: 'Purchase completed successfully',
                purchase: await Purchase_1.default.findById(purchase._id).populate('items.productId')
            });
        }
        catch (error) {
            await session.abortTransaction();
            throw error;
        }
        finally {
            session.endSession();
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error processing purchase', error });
    }
};
exports.processPurchase = processPurchase;
// Get user's purchase history
const getPurchaseHistory = async (req, res) => {
    try {
        const purchases = await Purchase_1.default.find({ userId: req.user._id })
            .populate('items.productId')
            .sort({ purchaseDate: -1 });
        res.json(purchases);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching purchase history', error });
    }
};
exports.getPurchaseHistory = getPurchaseHistory;
