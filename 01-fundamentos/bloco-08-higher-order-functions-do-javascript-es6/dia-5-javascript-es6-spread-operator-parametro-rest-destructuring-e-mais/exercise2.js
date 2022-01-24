const array = [5, 5, 10, 10];

const sum = (...numbers) => {
  return numbers.reduce((acc, number) => acc + number, 0);
}

console.log(sum(1, 2, 3, 4, 5, 6, 7));
console.log(sum(...[1, 2, 3, 4]));
console.log(sum(...array));