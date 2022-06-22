const connection = require('./connection');

const getByCep = async (cepNumber) => {
  const query = 'SELECT * FROM ceps WHERE cep = ?';

  const [address] = await connection.execute(query, [cepNumber]);

  return address;
};

module.exports = {
  getByCep,
};
