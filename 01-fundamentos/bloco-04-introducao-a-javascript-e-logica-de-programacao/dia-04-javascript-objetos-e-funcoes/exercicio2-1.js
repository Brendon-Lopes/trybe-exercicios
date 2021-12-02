// let palavra = 'mundo';

// const letras = palavra.split('');
// console.log(letras);

function verifyPalindrome(word){
    let reverse = word.toLowerCase().split('').reverse().join('');
    if(word.toLowerCase() === reverse){
        return 'É um palíndromo'
    } else {
        return 'Não é um palindromo';
    }
}

console.log(verifyPalindrome('Arara'));