const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addNewProperty = (obj, newKey, newValue) => {
  obj[newKey] = newValue;
}

addNewProperty(lesson2, 'turno', 'noite');

const listObjKeys = (obj) => {
  console.log(Object.keys(obj));
}

// listObjKeys(lesson2);

const objLength = (obj) => {
  console.log(Object.keys(obj).length);
}

// objLength(lesson2);

const listObjValues = (obj) => {
  console.log(Object.values(obj));
}

// listObjValues(lesson1);

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

// console.log(allLessons);

const totalStudents = (obj) => {
  // const total = allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;
  // console.log(total);
  let total = 0;
  let array = Object.keys(obj);
  for (const i in array) {
    total += obj[array[i]].numeroEstudantes;
  }
  return total;
}

// console.log(totalStudents(allLessons));

const getValueByNumber = (obj, num) => {
  console.log(Object.values(obj)[num]);
}

// getValueByNumber(lesson1, 0);

const verifyPair = (obj, key, value) => {
  let verify = false;
  let array = Object.entries(obj);
  for (const index in array) {
    if (array[index].includes(key) && array[index].includes(value)) {
      verify = true;
    }
  }
  return verify;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
