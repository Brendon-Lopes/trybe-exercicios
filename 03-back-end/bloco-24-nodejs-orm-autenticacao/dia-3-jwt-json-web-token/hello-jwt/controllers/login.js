const Joi = require('joi');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const validateBody = (body) => Joi.object({
  username: Joi
    .string()
    .min(5)
    .alphanum()
    .required(),
  password: Joi
    .string()
    .min(5)
    .required(),
}).validate(body);

const isAdmin = (body) => {
  if (body.username === 'admin' && body.password === 's3nh4S3gur4???') {
    return true;
  }

  return false;
};

module.exports = async (req, res, next) => {
  const { body } = req;
  const { error } = validateBody(body);

  if (error) return next(error);

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const payload = {
    username: req.body.username,
    admin: isAdmin(body),
  };

  const token = jwt.sign(payload, JWT_SECRET, jwtConfig);

  return res.status(200).json({ token });
};
