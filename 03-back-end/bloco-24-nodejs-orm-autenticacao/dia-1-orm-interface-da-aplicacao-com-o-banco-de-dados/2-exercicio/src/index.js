require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const Book = require("./controllers/BooksController");

app.get('/books', Book.getAll);

app.get('/books/:id', Book.getById);

app.post('/books', Book.create);

app.put('/books/:id', Book.update);

app.delete('/books/:id', Book.remove);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
