"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const purchaseController_1 = require("../controllers/purchaseController");
const auth_1 = require("../middleware/auth");
const router = express_1.default.Router();
// All purchase routes require authentication
router.use(auth_1.authenticate);
router.post('/checkout', purchaseController_1.processPurchase);
router.get('/history', purchaseController_1.getPurchaseHistory);
exports.default = router;
