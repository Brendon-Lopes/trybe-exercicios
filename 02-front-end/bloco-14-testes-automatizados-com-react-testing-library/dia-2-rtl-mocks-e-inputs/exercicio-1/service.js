const numberGen = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  return number;
}

module.exports = { numberGen };
