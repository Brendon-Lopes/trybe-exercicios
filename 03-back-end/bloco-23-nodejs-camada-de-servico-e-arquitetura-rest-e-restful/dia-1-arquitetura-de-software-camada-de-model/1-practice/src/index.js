const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

const Book = require('./models/Book');
const { validateBook } = require('./services/Book');
const Author = require('./models/Author');

app.use(express.json());

app.get('/books', async (req, res) => {
  const { author_id } = req.query;

  const books = await Book.getByAuthorId(author_id);

  return res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;

  const book = await Book.getByBookId(id);

  if (book.length === 0) return res.status(404).json({ message: 'Not Found' });

  return res.status(200).json(book);
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;

  const validate = await validateBook(title, author_id);

  if (!validate) return res.status(400).json({ message: 'Dados inválidos' });

  await Book.create(title, author_id);

  return res.status(201).json({ message: 'Livro criado com sucesso' });
});

app.get('/authors', async (req, res) => {
  const ids = await Author.getAllIds();

  return res.status(200).json(ids);
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));