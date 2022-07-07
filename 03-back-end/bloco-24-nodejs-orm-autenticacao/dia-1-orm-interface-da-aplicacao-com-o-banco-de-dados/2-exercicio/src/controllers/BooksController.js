const Book = require('../services/BooksService');

const getAll = async (req, res) => {
  try {
    const books = await Book.getAll();

    return res.status(200).json(books)
  } catch (err) {
    console.log(err);
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.getById(id);

    if (!book) return res.status(404).json({ message: "Book not found" });

    return res.status(200).json(book);
  } catch (err) {
    console.log(err);
  }
};

const create = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;

    const book = await Book.create({ title, author, pageQuantity });

    return res.status(201).json(book);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAll,
  getById,
  create,
};
