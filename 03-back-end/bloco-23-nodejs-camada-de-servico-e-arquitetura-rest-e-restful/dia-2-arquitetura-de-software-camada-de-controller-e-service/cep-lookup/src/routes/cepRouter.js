const express = require('express');
const cepRouter = express.Router();

const Cep = require('../controllers/Cep');

const { validateCepNumber, validateSentData } = require('../middlewares');

cepRouter.get('/:cep', validateCepNumber, Cep.getByCep);

cepRouter.post('/', validateSentData, Cep.registerNewCep);

module.exports = cepRouter;
