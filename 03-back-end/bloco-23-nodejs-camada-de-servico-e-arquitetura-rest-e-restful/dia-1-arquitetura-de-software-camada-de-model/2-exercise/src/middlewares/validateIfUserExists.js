const User = require('../models/User');

const validateIfUserExists = async (req, res, next) => {
  const { id } = req.params;
  
  const user = await User.getById(id);

  if (user.length === 0) return res.status(404).json({
    error: 'true',
    message: 'Usuário não encontrado'
  });

  next();
};

module.exports = validateIfUserExists;
