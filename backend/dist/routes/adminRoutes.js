"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adminController_1 = require("../controllers/adminController");
const router = express_1.default.Router();
// Admin login route
router.post('/login', adminController_1.login);
// Create admin route (protected, should be removed in production)
router.post('/create', adminController_1.createAdmin);
exports.default = router;
