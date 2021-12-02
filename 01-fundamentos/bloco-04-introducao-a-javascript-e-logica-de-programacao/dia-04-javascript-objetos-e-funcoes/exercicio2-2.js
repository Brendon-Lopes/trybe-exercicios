function higherValueIndex (array){

    let higherNumber = 0;
    let higherNumberIndex = 0;

    for(let i of array){
        if(i > higherNumber){
            higherNumber = i; 
        }
    }
    return array.indexOf(higherNumber);
}

console.log(higherValueIndex([2, 3, 6, 7, 10, 1]));