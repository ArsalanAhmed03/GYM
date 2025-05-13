"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pricingPlanController_1 = require("../controllers/pricingPlanController");
const auth_1 = require("../middleware/auth");
const router = express_1.default.Router();
// Public routes
router.get('/', pricingPlanController_1.getAllPricingPlans);
router.get('/:id', pricingPlanController_1.getPricingPlan);
// Protected routes (admin only)
router.post('/', auth_1.isAdmin, pricingPlanController_1.createPricingPlan);
router.put('/:id', auth_1.isAdmin, pricingPlanController_1.updatePricingPlan);
router.delete('/:id', auth_1.isAdmin, pricingPlanController_1.deletePricingPlan);
// User plan update route
router.post('/update-user-plan', pricingPlanController_1.updateUserPlan);
exports.default = router;
