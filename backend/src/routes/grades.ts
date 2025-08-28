import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Grades route - to be implemented' });
});

export default router; 