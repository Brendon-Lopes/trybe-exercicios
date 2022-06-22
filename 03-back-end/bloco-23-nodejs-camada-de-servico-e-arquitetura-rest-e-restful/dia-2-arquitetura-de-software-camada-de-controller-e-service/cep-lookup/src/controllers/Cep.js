const Cep = require('../services/Cep');

const getByCep = async (req, res) => {
  try {
    const cepNumber = req.params.cep;

    const address = await Cep.getByCep(cepNumber);

    return res.status(200).json(address);
  } catch (error) {
    return res.status(404).json({ error: { code: 'invalidData', message: error.message }});
  }
};

const registerNewCep = async (req, res) => {
  try {
    const { cep, logradouro, bairro, localidade, uf } = req.body;

    const data = { cep, logradouro, bairro, localidade, uf };

    await Cep.registerNewCep(data);

    return res.status(201).json(data);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getByCep,
  registerNewCep,
};
