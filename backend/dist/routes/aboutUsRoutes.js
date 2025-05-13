"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // Add RequestHandler import
const aboutUsController_1 = require("../controllers/aboutUsController");
const auth_1 = require("../middleware/auth");
const router = express_1.default.Router();
// Public route to get About Us information
router.get('/', auth_1.authenticate, aboutUsController_1.getAboutUs);
// Protected route to update About Us information (admin only)
router.post('/', auth_1.authenticate, aboutUsController_1.updateAboutUs);
exports.default = router;
