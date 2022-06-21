const validateUser = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) return res.status(400).json({
    error: 'true',
    message: 'firstName, lastName, email e password são campos obrigatórios'
  });

  if (password.toString().length < 6) return res.status(400).json({
    error: 'true',
    message: 'senha deve conter no mínimo 6 caracteres'
  });

  const emailRegex = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;
  if (!emailRegex.test(email)) return res.status(400).json({
    error: 'true',
    message: 'email inválido'
  });

  next();
}

module.exports = validateUser;
