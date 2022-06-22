const Cep = require('../models/Cep');

const getByCep = async (cepNumber) => {
  const address = await Cep.getByCep(cepNumber);

  return address;
}

module.exports = {
  getByCep,
};
