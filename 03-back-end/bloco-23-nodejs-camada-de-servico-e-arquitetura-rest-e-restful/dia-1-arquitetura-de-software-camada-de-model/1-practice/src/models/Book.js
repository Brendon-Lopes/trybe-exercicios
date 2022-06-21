const connection = require('./connection');

const Author = require('./Author');

const getAll = async () => {
  const [books] = await connection.execute('SELECT title FROM model_example.books');

  return books;
}

const getByAuthorId = async (id) => {
  const [books] = await connection.execute(
    `SELECT title FROM model_example.books WHERE author_id = ${id}`
  );

  return books;
}

const getByBookId = async (id) => {
  const query = 'SELECT title FROM books WHERE id = ?';

  const [book] = await connection.execute(query, [id]);

  return book;
}

const create = async (title, author_id) => {
  const query = 'INSERT INTO model_example.books (title, author_id) VALUES (?, ?)'
  await connection.execute(query, [title, author_id]);
}

module.exports = {
  getAll,
  getByAuthorId,
  getByBookId,
  create,
}
