const getPing = (req, res) => {
  return res.status(200).json({ message: 'Pong!' });
};

module.exports = {
  getPing,
};
