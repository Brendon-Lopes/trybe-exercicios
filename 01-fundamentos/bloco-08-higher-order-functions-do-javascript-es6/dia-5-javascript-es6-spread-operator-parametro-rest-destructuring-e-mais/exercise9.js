const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

let months = [];
const spreadSeasons = ({spring, summer, autumn, winter}) => months = [...winter, ...spring, ...summer, ...autumn];

spreadSeasons(yearSeasons);
console.log(months);

const sendFirstElementToEnd = (arr) => {
  const firstElement = arr.shift();
  arr.push(firstElement);
}

sendFirstElementToEnd(months);
console.log(months);
