"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const NutritionTip_1 = __importDefault(require("../models/NutritionTip"));
const router = express_1.default.Router();
// GET /api/nutrition-tips
router.get('/', async (req, res, next) => {
    try {
        const tips = await NutritionTip_1.default.find({});
        res.json(tips);
    }
    catch (err) {
        console.error('Error fetching nutrition tips:', err);
        next(err);
    }
});
exports.default = router;
