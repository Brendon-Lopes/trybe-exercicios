const Author = require('../models/Author');

const validateBook = async (title, authorId) => {
  const ids = await Author.getAllIds();

  const isIdValid = ids.some(({ id }) => id === Number(authorId));

  if (!title || title.length < 3) return false;
  if (!authorId || !isIdValid) return false;

  return true;
}

module.exports = {
  validateBook,
}
