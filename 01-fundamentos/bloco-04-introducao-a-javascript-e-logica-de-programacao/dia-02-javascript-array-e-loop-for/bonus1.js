let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let arrayCopy = array.slice();

for(let i = 1; i < arrayCopy.length - 1; i += 1){
    for(let j = 0; j < i; j += 1){
        if(arrayCopy[i] < arrayCopy[j]){
            [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
        }
    }
}
console.log(array);
console.log(arrayCopy);