"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EmailSubscription_1 = __importDefault(require("../models/EmailSubscription"));
const router = (0, express_1.Router)();
router.post('/', async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }
    try {
        const existing = await EmailSubscription_1.default.findOne({ email });
        if (existing) {
            return res.status(409).json({ message: 'Already subscribed' });
        }
        const newSub = await EmailSubscription_1.default.create({ email });
        return res.status(201).json({ message: 'Subscribed successfully', data: newSub });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
});
exports.default = router;
