function techList(arrayTech, name) {
  let result = [];
  let tempObject = {};
  let sortedArray = arrayTech.sort();

  if(sortedArray.length === 0) return 'Vazio!';
  
  for(let index of sortedArray){
    tempObject = {tech: index, name: name};
    result.push(tempObject);
  }
  return result;
}

module.exports = techList;
