let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddNumbersQuant = 0;

for(let numbersElement of numbers){
   if(numbersElement % 2 !== 0){
       oddNumbersQuant += 1;
   }
} console.log(oddNumbersQuant);