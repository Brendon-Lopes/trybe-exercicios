// parte 1.1

// const testingScope = escopo => {
//   if (escopo) {
//     let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     let elseScope = `Não devo ser utilizada fora do meu escopo (else)`;
//     console.log(elseScope);
//   }
// }

// testingScope(false);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArray = arr => {
  for (let i = arr.length - 1; i > 0; i -= 1) {
    for (let j = 0; j < i; j += 1) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
  console.log(arr);
}

sortArray(oddsAndEvens);
