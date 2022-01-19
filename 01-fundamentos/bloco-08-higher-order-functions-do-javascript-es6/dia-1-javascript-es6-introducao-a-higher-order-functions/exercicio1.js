const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const generateEmployee = (name) => {
  const nameTransformed = name.toLowerCase().split(' ').join('_');
  const email = `${nameTransformed}@trybe.com`;
  return {NomeCompleto: name, Email: email};
}

console.log(newEmployees(generateEmployee));