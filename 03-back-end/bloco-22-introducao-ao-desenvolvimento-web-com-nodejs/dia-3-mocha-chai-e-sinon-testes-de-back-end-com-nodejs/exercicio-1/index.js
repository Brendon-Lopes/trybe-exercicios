const fs = require('fs').promises;

const identifySign = (number) => {
  const toNumber = Number(number);
  if (isNaN(toNumber)) throw new Error('Invalid input, insert a number');
  if (toNumber > 0) return 'positive';
  if (toNumber < 0) return 'negative';
  if (toNumber === 0) return 'neutral';
}

const writeInFile = async (fileName, contentToWrite) => {
  if (!fileName || !contentToWrite) throw new Error('Invalid parameters');
  await fs.writeFile(`./${fileName}.txt`, contentToWrite);
  return 'ok';
}

module.exports = {identifySign, writeInFile};
