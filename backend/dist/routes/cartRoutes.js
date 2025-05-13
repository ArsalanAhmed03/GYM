"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cartController_1 = require("../controllers/cartController");
const auth_1 = require("../middleware/auth");
const router = express_1.default.Router();
// All cart routes require authentication
router.use(auth_1.authenticate);
router.get('/', cartController_1.getCart);
router.post('/add', cartController_1.addToCart);
router.post('/remove', cartController_1.removeFromCart);
router.post('/update-quantity', cartController_1.updateQuantity);
router.post('/clear', cartController_1.clearCart);
exports.default = router;
