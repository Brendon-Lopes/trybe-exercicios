import express, { Request, Response, NextFunction } from 'express';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization: token } = req.headers;

  if (!token || token.length < 16)
    return res.status(401).json({ message: "Invalid token" });

  return next();
};

export default validateToken;
