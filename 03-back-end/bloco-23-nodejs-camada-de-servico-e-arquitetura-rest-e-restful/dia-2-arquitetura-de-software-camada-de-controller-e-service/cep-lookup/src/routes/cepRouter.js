const express = require('express');
const cepRouter = express.Router();

const Cep = require('../controllers/Cep');

const { validateCepNumber, validateSentCep } = require('../middlewares');

cepRouter.get('/:cep', validateCepNumber, Cep.getByCep);

cepRouter.post(
  '/',
  validateSentCep,
  Cep.registerNewCep,
);

module.exports = cepRouter;
