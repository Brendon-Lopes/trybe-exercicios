const Cep = require('../services/Cep');

const getByCep = async (req, res) => {
  const { cep } = req.params;

  const data = await Cep.getByCep(cep);

  return res.status(200).json(data);
};

module.exports = {
  getByCep,
}
