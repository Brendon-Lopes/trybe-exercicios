const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();

  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);

  if (book === null) return false;

  return book;
};

const create = async ({ title, author, pageQuantity }) => {
  const book = await Book.create({ title, author, pageQuantity });

  return book;
};

const update = async ({ id, title, author, pageQuantity }) => {
  const find = await getById(id);

  console.log(find);

  if (!find) return false;

  const book = await Book.update({ title, author, pageQuantity }, {
    where: {
      id,
    }
  });

  console.log('pra cá não');

  return book;
};

const remove = async (id) => {
  const find = await getById(id);

  if (!find) return false;

  await Book.destroy({ where: { id } });

  return true;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
