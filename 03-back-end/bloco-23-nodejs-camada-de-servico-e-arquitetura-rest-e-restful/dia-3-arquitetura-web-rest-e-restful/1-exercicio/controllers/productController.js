const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (req, res) => {
  const products = await ProductModel.getAll();

  return res.status(200).json(products);
});

router.get('/:id', async (req, res) => {
  const product = await ProductModel.getById(req.params.id);

  if (!product) return res.status(404).json({ message: "Product not found" });

  return res.status(200).json(product);
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);

  return res.status(201).json(newProduct);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const product = await ProductModel.getById(id);
  if (!product) return res.status(404).json({ message: "Product not found" });

  await ProductModel.exclude(id);

  return res.status(204).json();
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, brand } = req.body;

  if (!name || !brand) return res.status(400).json({ message: "Fields \"name\" and \"brand\" required" });

  const product = await ProductModel.getById(id);
  if (!product) return res.status(404).json({ message: "Product not found" });

  await ProductModel.update(id, name, brand);

  return res.status(200).json({ id, name, brand });
});

module.exports = router;

