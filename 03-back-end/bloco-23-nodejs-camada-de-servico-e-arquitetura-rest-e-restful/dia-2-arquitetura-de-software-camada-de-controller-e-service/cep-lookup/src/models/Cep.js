const connection = require('./connection');

const getByCep = async (cepNumber) => {
  const query = 'SELECT * FROM cep_lookup.ceps WHERE cep = ?';

  const [address] = await connection.execute(query, [cepNumber]);

  return address;
};

const registerNewCep = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const query = `
    INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf)
    VALUES (?, ?, ?, ?, ?)
  `;

  const post = await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);

  console.log(post);
};

module.exports = {
  getByCep,
  registerNewCep,
};
