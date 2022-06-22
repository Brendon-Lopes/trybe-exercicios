const express = require('express');

const cepRouter = express.Router();

const Cep = require('../controllers/Cep');

cepRouter.get('/:cep', Cep.getByCep);

module.exports = cepRouter;
