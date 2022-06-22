const Cep = require('../models/Cep');
const { fetchByCep } = require('../models/ViaCepApi');

const getByCep = async (cepNumber) => {
  const address = await Cep.getByCep(cepNumber);

  if (address.length === 0) {
  const { erro, cep, logradouro, bairro, localidade, uf } = await fetchByCep(cepNumber);

  if (erro) throw {
    errorStatus: 404,
    code: 'Not Found',
    message: 'CEP não encontrado',
  };

  const address = {
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
  };

  await Cep.registerNewCep(address);

  return address;
}

  return address[0];
};

const verifyIfCepExists = async (cep) => {
  const address = await Cep.getByCep(cep);

  if (address.length > 0) return true;

  return false;
};

const registerNewCep = async (data) => {
  const cepExists = await verifyIfCepExists(data.cep);

  if (cepExists) throw {
    errorStatus: 409,
    code: 'alreadyExists',
    message: 'CEP já existente',
  };

  await Cep.registerNewCep(data);
};

module.exports = {
  getByCep,
  registerNewCep,
};
