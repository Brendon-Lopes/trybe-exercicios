function hydrate(str) {
  let numbersArray = str.match(/\d/g);
  let realNumbers = [];
  let sum = 0;

  numbersArray.forEach((element) => {
    realNumbers.push(parseInt(element));
  });
 
  realNumbers.forEach((element) => {
    sum += element;
  });

  if(sum === 1) return sum + ' copo de água';
  return sum + ' copos de água';
}

module.exports = hydrate;
