function encode(str) {
  let transformToArray = str.split('');
  let transformed = [];
  let encoded;

  for(let i in transformToArray){
    switch(transformToArray[i]){
      case 'a':
        transformed.push('1');
        break;
      case 'e':
        transformed.push('2');
        break;
      case 'i':
        transformed.push('3');
        break;
      case 'o':
        transformed.push('4');
        break;
      case 'u':
        transformed.push('5');
        break;
      default:
        transformed.push(transformToArray[i]);
        break;
    }
  }
  encoded = transformed.join('');
  return encoded;
}

function decode(str) {
  let transformToArray = str.split('');
  let transformed =[];
  let decoded;

  for(let i in transformToArray){
    switch(transformToArray[i]){
      case '1':
        transformed.push('a');
        break;
      case '2':
        transformed.push('e');
        break;
      case '3':
        transformed.push('i');
        break;
      case '4':
        transformed.push('o');
        break;
      case '5':
        transformed.push('u');
        break;
      default:
        transformed.push(transformToArray[i]);
        break;
    }
  }
  decoded = transformed.join('');
  return decoded;
}

module.exports = {
  encode,
  decode
};
