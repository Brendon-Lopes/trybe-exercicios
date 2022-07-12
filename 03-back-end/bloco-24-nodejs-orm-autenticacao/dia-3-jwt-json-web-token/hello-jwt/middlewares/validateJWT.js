const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    const err = new Error('Token not found');
    err.statusCode = 401;
    next(err);
  }

  try {
    const decoded = jwt.decode(token, process.env.JWT_SECRET);

    req.username = decoded.username;
    req.admin = decoded.admin;
  } catch (error) {
    error.statusCode = 401;
    next(error);
  }

  next();
};
