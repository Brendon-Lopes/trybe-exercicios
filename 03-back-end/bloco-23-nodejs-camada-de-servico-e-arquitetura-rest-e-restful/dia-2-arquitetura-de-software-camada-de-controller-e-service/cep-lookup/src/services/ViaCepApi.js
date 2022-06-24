const ViaCepApi = require('../models/ViaCepApi');

const fetchByCep = async (cep) => {
  try {
    const data = await ViaCepApi.fetchByCep(cep);

    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  fetchByCep,
};
