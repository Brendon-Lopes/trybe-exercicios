import { Router } from 'express';
import crypto from 'crypto';

import validateUser from '../middlewares/validateUser';

const signupRoutes = Router();

signupRoutes.post('/', validateUser, (req, res) => {
  const token = crypto.randomBytes(8).toString('hex');

  return res.status(200).json({ token });
});

export default signupRoutes;
