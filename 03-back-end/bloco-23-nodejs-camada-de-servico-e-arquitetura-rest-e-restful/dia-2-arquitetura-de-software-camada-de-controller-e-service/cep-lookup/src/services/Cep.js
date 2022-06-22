const Cep = require('../models/Cep');

const getByCep = async (cepNumber) => {
  const address = await Cep.getByCep(cepNumber);

  if (address.length === 0) throw new Error("CEP não encontrado");

  return address;
}

const registerNewCep = async (data) => {
  await Cep.registerNewCep(data);
};

module.exports = {
  getByCep,
  registerNewCep,
};
