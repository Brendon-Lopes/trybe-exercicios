// const fatorial = num => {
//   let numbers = [];
//   let multiplied = 1;

//   for (let i = num; i > 0; i -= 1) {
//     numbers.push(i);
//   }

//   for (let i = 0; i < numbers.length; i += 1) {
//     multiplied *= numbers[i];
//   }

//   console.log(multiplied);
// }

// const longestWord = str => {
//   let strToArr = str.split(' ');
//   let longest = '';
  
//   for (const i of strToArr) {
//     if (i.length > longest.length) {
//       longest = i;
//     }
//   }
//   console.log(longest);
// }

// longestWord('Antônio foi no banheiro e não sabemos o que aconteceu');

//parte 2.4

const skills = ['JavaScript', 'CSS', 'HTML']

const replaceX = str => {
  let str2 = `Tryber x aqui!`;
  let result = str2.replace('x', str);
  return result;
}

const func = presentation => {
  skills.sort();
  let result = `${presentation}, minhas principais habilidades são ${skills[0]}, ${skills[1]} e ${skills[2]}!`;
  console.log(result);
}

func(replaceX('Brendon'));
