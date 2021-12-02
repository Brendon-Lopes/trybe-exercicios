function mostChar(array){

    let biggestWord = '';

    for(let i in array){
        if (array[i].length > biggestWord.length){
            biggestWord = array[i];
        }
    } return biggestWord;

}

console.log(mostChar(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

