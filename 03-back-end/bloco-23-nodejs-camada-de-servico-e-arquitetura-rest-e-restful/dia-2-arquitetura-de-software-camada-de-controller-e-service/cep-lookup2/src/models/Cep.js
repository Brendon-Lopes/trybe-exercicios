const connection = require('./connection');

const getByCep = async (cep) => {
  const query = `
    SELECT * FROM cep_lookup2.ceps WHERE cep = ?
  `;

  const data = await connection.execute(query, [cep]);

  return data;
};

module.exports = {
  getByCep,
};
