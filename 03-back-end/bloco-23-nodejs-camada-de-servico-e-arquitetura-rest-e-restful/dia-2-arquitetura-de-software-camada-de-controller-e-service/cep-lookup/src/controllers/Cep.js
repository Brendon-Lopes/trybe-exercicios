const Cep = require('../services/Cep');

const getByCep = async (req, res) => {
  try {
    const cepNumber = req.params.cep;

    const address = await Cep.getByCep(cepNumber);

    return res.status(200).json(address);
  } catch ({ errorStatus, code, message }) {
    return res.status(errorStatus).json({ error: { code, message } });
  }
};

const registerNewCep = async (req, res) => {
  try {
    const { cep, logradouro, bairro, localidade, uf } = req.body;

    const data = { cep, logradouro, bairro, localidade, uf };

    await Cep.registerNewCep(data);

    return res.status(201).json(data);
  } catch ({ errorStatus, code, message}) {
    return res.status(errorStatus).json({ error: { code, message } });
  }
}

module.exports = {
  getByCep,
  registerNewCep,
};
