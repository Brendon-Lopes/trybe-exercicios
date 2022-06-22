const Cep = require('../services/Cep');

const getByCep = async (req, res) => {
  const cepNumber = req.params.cep;

  const address = await Cep.getByCep(cepNumber);

  return res.status(200).json(address);
};

module.exports = {
  getByCep,
};
