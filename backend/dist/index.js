"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./db"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const cartRoutes_1 = __importDefault(require("./routes/cartRoutes"));
const purchaseRoutes_1 = __importDefault(require("./routes/purchaseRoutes"));
const trainerRoutes_1 = __importDefault(require("./routes/trainerRoutes"));
const pricingPlanRoutes_1 = __importDefault(require("./routes/pricingPlanRoutes"));
const nutritionTips_1 = __importDefault(require("./routes/nutritionTips"));
const healthyRecipes_1 = __importDefault(require("./routes/healthyRecipes"));
const emailSubscriptions_1 = __importDefault(require("./routes/emailSubscriptions"));
const contactMessages_1 = __importDefault(require("./routes/contactMessages"));
const eventRoutes_1 = __importDefault(require("./routes/eventRoutes"));
const aboutUsRoutes_1 = __importDefault(require("./routes/aboutUsRoutes"));
// Load environment variables
dotenv_1.default.config();
// Connect to MongoDB
(0, db_1.default)();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Middleware
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// Routes
app.use('/api/auth', authRoutes_1.default);
app.use('/api/products', productRoutes_1.default);
app.use('/api/cart', cartRoutes_1.default);
app.use('/api/purchase', purchaseRoutes_1.default);
app.use('/api/trainers', trainerRoutes_1.default);
app.use('/api/pricing-plans', pricingPlanRoutes_1.default);
app.use('/api/nutrition-tips', nutritionTips_1.default);
app.use('/api/healthy-recipes', healthyRecipes_1.default);
app.use('/api/email-subscriptions', emailSubscriptions_1.default);
app.use('/api/contact-messages', contactMessages_1.default);
app.use('/api/events', eventRoutes_1.default);
app.use('/api/about-us', aboutUsRoutes_1.default);
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});
// Start server
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode`);
    console.log(`Access URLs:
  Local: http://localhost:${PORT}
  Render: https://gym-backend-ujzl.onrender.com`);
});
