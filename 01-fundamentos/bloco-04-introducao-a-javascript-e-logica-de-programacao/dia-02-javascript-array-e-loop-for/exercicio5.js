let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let higherNumber = 0;


// for(i = 0; i < numbers.length; i += 1){
//     if(higherNumber < numbers[i]){
//         higherNumber = numbers[i];
//     }
// } console.log(higherNumber);

for(let numberElement of numbers){
    if(higherNumber < numberElement){
        higherNumber = numberElement;
    }
} console.log(higherNumber);