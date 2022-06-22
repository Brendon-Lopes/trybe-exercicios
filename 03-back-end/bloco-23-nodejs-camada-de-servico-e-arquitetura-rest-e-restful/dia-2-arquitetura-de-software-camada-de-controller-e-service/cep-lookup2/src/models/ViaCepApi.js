const axios = require('axios');

const fetchCepInfo = async (cep) => {
  const URL = `https://viacep.com.br/ws/${cep}/json/`;

  const { data } = await axios.get(URL);
  console.log(data);

  return data;
};

module.exports = {
  fetchCepInfo,
};
