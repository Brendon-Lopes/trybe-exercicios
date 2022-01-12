const fatorial = num => {
  let numbers = [];
  let multiplied = 1;

  for (let i = num; i > 0; i -= 1) {
    numbers.push(i);
  }

  for (let i = 0; i < numbers.length; i += 1) {
    multiplied *= numbers[i];
  }

  console.log(multiplied);
}

fatorial(1);
