import { Request, Response, NextFunction } from 'express';

const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const { email, password, firstName, phone } = req.body;
  
  if (!email || !password || !firstName || !phone)
    return res.status(401).json({ message: "missing fields" });

  return next();
};

export default validateUser;
