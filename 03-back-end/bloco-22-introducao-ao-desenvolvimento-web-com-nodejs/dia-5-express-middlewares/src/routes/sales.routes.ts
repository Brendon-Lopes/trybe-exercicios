import { Router } from 'express';

import validateToken from '../middlewares/validateToken';
import validateProducts from '../middlewares/validateProduct';

import SalesRepository from '../repositories/SalesRepository';

const salesRoutes = Router();

const salesRepository = new SalesRepository();

salesRoutes.post('/', validateToken, validateProducts, (req, res) => {
  const { productName, infos } = req.body;

  salesRepository.create({ productName, infos });

  return res.status(201).json({ message: "sale registered with success" });
});

salesRoutes.get('/', (req, res) => {
  const sales = salesRepository.list();

  return res.status(200).json(sales);
});

export default salesRoutes;