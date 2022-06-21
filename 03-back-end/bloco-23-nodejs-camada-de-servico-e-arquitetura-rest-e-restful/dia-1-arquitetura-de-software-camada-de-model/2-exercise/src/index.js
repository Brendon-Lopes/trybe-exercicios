const express = require('express');

const middleware = require('./middlewares');

const User = require('./models/User');

const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/user', async (req, res) => {
  const user = await User.getAll();

  return res.status(200).json(user);
});

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;

  const user = await User.getById(id);

  if (user.length === 0) return res.status(404).json({
    error: 'true',
    message: 'Usuário não encontrado'
  });

  return res.status(200).json(user);
});

app.post('/user', middleware.validateUser, async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  await User.create(firstName, lastName, email, password);

  const user = await User.getLastCreated();

  return res.status(201).json(...user);
});

app.put('/user/:id', middleware.validateUser, middleware.validateIfUserExists, async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;

  await User.update(id, firstName, lastName, email, password);

  const user = await User.getById(id);

  return res.status(200).json(...user);
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
