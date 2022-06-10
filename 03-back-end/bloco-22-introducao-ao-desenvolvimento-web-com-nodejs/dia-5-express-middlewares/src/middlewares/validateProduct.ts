import express, { Request, Response, NextFunction } from 'express';

const validateProducts = (req: Request, res: Response, next: NextFunction) => {
  const { productName, infos } = req.body;

  if (!productName)
    return res.status(400).json({ message: "The productName is required" });

  if (productName.length < 4)
    return res.status(400).json({ message: "productName can't be less than 4 characters" });

  if (!infos)
    return res.status(400).json({ message: "The field 'infos' is required" });

  if (!infos.saleDate)
    return res.status(400).json({ message: "The field saleDate is required " });

  const regexp = /(\d{2})[-.\/](\d{2})[-.\/](\d{4})/;
  if (!regexp.test(infos.saleDate))
    return res.status(400).json({ message: "The field saleDate is not a valid date" });

  if (!infos.warrantyPeriod)
    return res.status(400).json({ message: "The field warrantyPeriod is required" });

  if (Number(infos.warrantyPeriod) < 1 && Number(infos.warrantyPeriod) > 3)
    return res.status(400).json({ message: "The warrantyPeriod must be a number between 1 and 3" });

  next();
};

export default validateProducts;