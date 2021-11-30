let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lowerNumber = numbers[0];

// let higherNumber = 0;

// for(let numbersElement of numbers){
//     if(higherNumber < numbersElement){
//         higherNumber = numbersElement;
//     }
// }

// let lowerNumber = higherNumber;

// for(numbersElement of numbers){
//     if(lowerNumber > numbersElement){
//         lowerNumber = numbersElement;
//     }
// } console.log(lowerNumber);

// mais complicado do que deveria ser, segue código mais limpo.

for(let numbersElement of numbers){
    if(lowerNumber > numbersElement){
        lowerNumber = numbersElement;
    }
} console.log(lowerNumber);