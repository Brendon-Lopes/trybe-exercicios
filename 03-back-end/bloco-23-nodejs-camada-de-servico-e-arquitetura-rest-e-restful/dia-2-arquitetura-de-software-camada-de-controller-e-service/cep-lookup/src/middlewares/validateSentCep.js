const validateSentCep = (req, res, next) => {
  const { cep } = req.body;

  const regex = /^\d{5}-\d{3}$/;
  
  if (!regex.test(cep)) return res.status(400).json({
    error: { code: "invalidData", message: "CEP inválido" }
  });

  next();
};

module.exports = validateSentCep;
