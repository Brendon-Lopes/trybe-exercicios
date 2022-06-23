const connection = require('./connection');

const { getDistrictId } = require('./District');

const getByCep = async (cep) => {
  const query = `
    SELECT * FROM cep_lookup2.ceps WHERE cep = ?
  `;

  const data = await connection.execute(query, [cep]);

  console.log('AQUI Ó', data[0]);

  if (!data[0]) return null;

  const districtId = await getDistrictId(data.bairro, data.localidade, data.uf);

  // const insertQuery = `
  //   INSERT INTO ceps (cep, logradouro, bairro_id) VALUES (?, ?, ?)
  // `

  // await connection.execute(insertQuery, [cep, data.logradouro, districtId]);

  return data;
};

module.exports = {
  getByCep,
};
