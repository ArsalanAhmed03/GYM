import { Request, Response } from 'express';
import AboutUs from '../models/AboutUs';

export const getAboutUs = async (req: Request, res: Response) => {
  try {
    const aboutUs = await AboutUs.findOne();
    if (!aboutUs) {
      return res.status(404).json({ message: 'About Us information not found' });
    }
    res.json(aboutUs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching About Us information', error });
  }
};

export const updateAboutUs = async (req: Request, res: Response) => {
  try {
    const { description, team, achievements, contact } = req.body;
    
    let aboutUs = await AboutUs.findOne();
    
    if (aboutUs) {
      aboutUs.description = description;
      aboutUs.team = team;
      aboutUs.achievements = achievements;
      aboutUs.contact = contact;
      await aboutUs.save();
    } else {
      aboutUs = new AboutUs({ description, team, achievements, contact });
      await aboutUs.save();
    }
    
    res.json(aboutUs);
  } catch (error) {
    res.status(500).json({ message: 'Error updating About Us information', error });
  }
}; 