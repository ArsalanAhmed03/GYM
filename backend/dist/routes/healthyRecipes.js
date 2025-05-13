"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const HealthyRecipe_1 = __importDefault(require("../models/HealthyRecipe"));
const router = express_1.default.Router();
// GET /api/healthy-recipes
router.get('/', async (req, res, next) => {
    try {
        const recipes = await HealthyRecipe_1.default.find({});
        res.json(recipes);
    }
    catch (err) {
        console.error('Error fetching healthy recipes:', err);
        next(err);
    }
});
exports.default = router;
