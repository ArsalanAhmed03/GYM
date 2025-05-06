import { Router, Request, Response } from 'express';
import EmailSubscription from '../models/EmailSubscription';

const router = Router();

router.post('/', async (req: Request, res: Response): Promise<any> => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    const existing = await EmailSubscription.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: 'Already subscribed' });
    }

    const newSub = await EmailSubscription.create({ email });
    return res.status(201).json({ message: 'Subscribed successfully', data: newSub });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
