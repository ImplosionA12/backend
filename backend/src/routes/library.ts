import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Library route - to be implemented' });
});

export default router; 