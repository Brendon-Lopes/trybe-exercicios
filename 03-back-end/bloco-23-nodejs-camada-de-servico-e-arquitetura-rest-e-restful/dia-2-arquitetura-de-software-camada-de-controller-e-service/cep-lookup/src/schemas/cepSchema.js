const Joi = require('joi');

const cepSchema = Joi.object({
  cep: Joi.string().pattern(new RegExp(/^\d{5}-\d{3}$/)),
  logradouro: Joi.string().required(),
  bairro: Joi.string().required(),
  localidade: Joi.string().required(),
  uf: Joi.string().required(),
});

module.exports = cepSchema;
