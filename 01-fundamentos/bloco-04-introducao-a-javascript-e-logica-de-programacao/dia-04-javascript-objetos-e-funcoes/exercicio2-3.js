function higherValueIndex (array){

    let lowerNumber = array[0];

    for(let i of array){
        if(i < lowerNumber){
            lowerNumber = i; 
        }
    }
    return array.indexOf(lowerNumber);
}

console.log(higherValueIndex([2, 4, 6, 7, 10, 0, -3]));