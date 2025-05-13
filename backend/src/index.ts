import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './db';
import authRoutes from './routes/authRoutes';
import productRoutes from './routes/productRoutes';
import cartRoutes from './routes/cartRoutes';
import purchaseRoutes from './routes/purchaseRoutes';
import trainerRoutes from './routes/trainerRoutes';
import pricingPlanRoutes from './routes/pricingPlanRoutes';
import nutritionTipsRoutes from './routes/nutritionTips';
import healthyRecipesRoutes from './routes/healthyRecipes';
import emailSubscriptionsRoutes from './routes/emailSubscriptions';
import contactMessagesRoutes from './routes/contactMessages';
import eventRoutes from './routes/eventRoutes';
import aboutUsRoutes from './routes/aboutUsRoutes';
// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/purchase', purchaseRoutes);
app.use('/api/trainers', trainerRoutes);
app.use('/api/pricing-plans', pricingPlanRoutes);
app.use('/api/nutrition-tips', nutritionTipsRoutes);
app.use('/api/healthy-recipes', healthyRecipesRoutes);
app.use('/api/email-subscriptions', emailSubscriptionsRoutes);
app.use('/api/contact-messages', contactMessagesRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/about-us', aboutUsRoutes);

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
