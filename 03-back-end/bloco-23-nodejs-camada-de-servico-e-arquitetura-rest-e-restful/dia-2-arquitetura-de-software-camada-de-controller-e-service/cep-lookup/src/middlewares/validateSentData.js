const cepSchema = require('../schemas/cepSchema');

const validateSentData = (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  const { error } = cepSchema.validate({ cep, logradouro, bairro, localidade, uf });

  if (error) return res.status(400).json({ error: { code: 'invalidData', message: error.message }});

  next();
};

module.exports = validateSentData;
