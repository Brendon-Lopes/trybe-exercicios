const connection = require('./connection');

const create = async (firstName, lastName, email, password) => {
  const [ user ] = await connection.execute(
    'INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)',
    [firstName, lastName, email, password]
  );

  return user;
};

const getByFullName = async (firstName, lastName) => {
  const [ user ] = await connection.execute(
    'SELECT * FROM users WHERE firstName = ? AND lastName = ?',
    [firstName, lastName]
  );

  return user;
};

const getLastCreated = async () => {
  const [user] = await connection.execute(
    'SELECT * FROM users ORDER BY id DESC LIMIT 1'
  );

  return user;
};

const getAll = async () => {
  const [user] = await connection.execute(
    'SELECT * FROM users'
  );

  return user;
};

const getById = async (id) => {
  const [user] = await connection.execute(
    'SELECT * FROM users WHERE id = ?',
    [id]
  );

  return user;
};

const update = async (id, firstName, lastName, email, password) => {
  await connection.execute(
    'UPDATE users SET firstName = ?, lastName = ?, email = ?, password = ? WHERE id = ?',
    [firstName, lastName, email, password, id]
  );
};

module.exports = {
  create,
  getByFullName,
  getLastCreated,
  getAll,
  getById,
  update,
};
