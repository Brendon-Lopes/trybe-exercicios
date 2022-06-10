import express from 'express';
import bodyParser from 'body-parser';
import crypto from 'crypto';

import validateProducts from './middlewares/validateProduct';
import validateUser from './middlewares/validateUser';
import validateToken from './middlewares/validateToken';

const app = express();

const sales = [];

app.use(bodyParser.json());

app.post('/sales', validateToken, validateProducts, (req, res) => {
  const { productName, infos } = req.body;

  sales.push({
    productName,
    infos,
  });

  return res.status(201).json({ message: "sale registered with success" });
});

app.get('/sales', (req, res) => {
  return res.status(200).json(sales);
});

app.post('/signup', validateUser, (req, res) => {
  const token = crypto.randomBytes(8).toString('hex');

  return res.status(200).json({ token });
});

app.listen(3333, () => console.log("Running on port 3333"));
