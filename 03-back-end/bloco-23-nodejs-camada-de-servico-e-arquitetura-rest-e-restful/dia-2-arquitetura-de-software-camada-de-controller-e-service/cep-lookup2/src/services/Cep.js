const Cep = require('../models/Cep');
const ViaCepApi = require('../models/ViaCepApi');

const fetchFromApi = async (cep) => {
  try {
    const data = await ViaCepApi.fetchCepInfo(cep);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getByCep = async (cepNumber) => {
  const [data] = await Cep.getByCep(cepNumber);

  if (data.length === 0) {
    const { cep, logradouro, bairro, localidade, uf } = await fetchFromApi(cepNumber);
    return { cep, logradouro, bairro, localidade, uf };
  }

  return data;
};

module.exports = {
  getByCep,
}
