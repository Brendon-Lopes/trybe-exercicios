let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let arrayCopy = array.slice();
let arrayMultiplied = [];

for(let i = 1; i < arrayCopy.length; i += 1){
    for(let j = 0; j < i; j += 1){
        if(arrayCopy[i] < arrayCopy[j]){
            [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
        }
    }
}

for(let k = 0; k < arrayCopy.length; k += 1){
    if(k + 1 < arrayCopy.length){
        arrayMultiplied.push(arrayCopy[k]*arrayCopy[k+1]);
    } else{
        arrayMultiplied.push(arrayCopy[k]*2);
    }
}
console.log(arrayCopy);
console.log(arrayMultiplied);