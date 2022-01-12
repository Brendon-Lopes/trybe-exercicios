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

const longestWord = str => {
  let strToArr = str.split(' ');
  let longest = '';
  
  for (const i of strToArr) {
    if (i.length > longest.length) {
      longest = i;
    }
  }
  console.log(longest);
}

longestWord('Antônio foi no banheiro e não sabemos o que aconteceu');
