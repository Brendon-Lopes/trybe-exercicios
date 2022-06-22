const axios = require('axios');

const fetchByCep = async (cep) => {
  const URL = `https://viacep.com.br/ws/${cep}/json/`;

  const { data } = await axios.get(URL);

  return data;
};

module.exports = {
  fetchByCep,
};
