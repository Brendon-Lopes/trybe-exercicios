let numbers = [];
let dividedNumbers = [];

for(let i = 1; i < 26; i += 1){
    numbers.push(i);
}

for(let numbersElement of numbers){
    dividedNumbers.push(numbersElement/2);
} console.log(dividedNumbers);