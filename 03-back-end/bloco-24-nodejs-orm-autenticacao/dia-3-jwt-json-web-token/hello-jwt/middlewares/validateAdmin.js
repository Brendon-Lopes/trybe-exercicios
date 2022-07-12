module.exports = async (req, res, next) => {
  const { admin } = req;

  if (!admin) {
    const error = new Error('Restricted Access');
    error.statusCode = 403;
    next(error);
  }

  next();
};
