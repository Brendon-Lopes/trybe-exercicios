const myNumber = () => {
  const result = Math.floor(Math.random() * 5 + 1);
  return result;
}

const lotteryNumber = (myNumber) => {
  const lotteryResult = Math.floor(Math.random() * 5 + 1);
  const myResult = myNumber();

  console.log(lotteryResult, myResult);

  if(lotteryResult === myResult) return `Parabéns, você ganhou!`;
  return `Tente novamente.`;
}

console.log(lotteryNumber(myNumber));
