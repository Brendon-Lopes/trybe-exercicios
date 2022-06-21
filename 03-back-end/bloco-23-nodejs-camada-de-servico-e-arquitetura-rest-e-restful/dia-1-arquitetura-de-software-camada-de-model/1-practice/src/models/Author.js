const connection = require('./connection');

const getAllIds = async () => {
  const [ ids ] = await connection.execute(
    'SELECT id FROM model_example.authors'
  );

  return ids;
}

module.exports = {
  getAllIds,
}