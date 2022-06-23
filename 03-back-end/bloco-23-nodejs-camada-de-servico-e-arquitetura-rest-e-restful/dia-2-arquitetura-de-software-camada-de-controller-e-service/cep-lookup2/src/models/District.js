const connection = require('./connection');

const getDistrictId = async (bairro, localidade, uf) => {
  const selectQuery = 'SELECT * FROM bairros WHERE bairro = ?';

  const insertQuery = 'INSERT INTO bairros (bairro, localidade, uf) VALUES (?, ?, ?)';

  console.log('chegou aqui?');

  const getDistrict = await connection.execute(selectQuery, [bairro]);

  console.log('e aqui?');

  if (getDistrict.length === 0) {
    const insert = await connection.execute(insertQuery, [bairro, localidade, uf]);
    console.log(insert);
  }

  console.log(bairro);
}

module.exports = {
  getDistrictId,
};
