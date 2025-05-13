"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAboutUs = exports.getAboutUs = void 0;
const AboutUs_1 = __importDefault(require("../models/AboutUs"));
const getAboutUs = async (req, res) => {
    try {
        const aboutUs = await AboutUs_1.default.findOne();
        if (!aboutUs) {
            return res.status(404).json({ message: 'About Us information not found' });
        }
        res.json(aboutUs);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching About Us information', error });
    }
};
exports.getAboutUs = getAboutUs;
const updateAboutUs = async (req, res) => {
    try {
        const { description, team, achievements, contact } = req.body;
        let aboutUs = await AboutUs_1.default.findOne();
        if (aboutUs) {
            aboutUs.description = description;
            aboutUs.team = team;
            aboutUs.achievements = achievements;
            aboutUs.contact = contact;
            await aboutUs.save();
        }
        else {
            aboutUs = new AboutUs_1.default({ description, team, achievements, contact });
            await aboutUs.save();
        }
        res.json(aboutUs);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating About Us information', error });
    }
};
exports.updateAboutUs = updateAboutUs;
