import Person from './classes/Person';
import Student from './classes/Student';
import Teacher from './classes/Teacher';

console.log('contagem:', Student.count);

const biscoitim = new Student(
  'biscoito',
  new Date('2002-06-14'),
  [10, 10, 8, 9],
  [6, 9]
);

const calaca = new Teacher('Calaça', new Date('1980-01-01'), 8000, 'Back-end');

console.log('x-----biscoitim-----x');
console.log('nome:', biscoitim.name);
console.log('soma notas:', biscoitim.sumGrades);
console.log('média notas:', biscoitim.sumAverageGrade);
console.log('data de nascimento:', biscoitim.birthDate);
console.log('matrícula:', biscoitim.enrollment);
console.log('Idade biscoitim:', Student.getAge(new Date('2002-06-14')));
console.log('contagem:', Student.count);
console.log('---------------------');
console.log('---------------------');
console.log('x-----Calaça-----x');
console.log('nome:', calaca.name);
console.log('salário:', calaca.salary);
console.log('data de admissão:', calaca.admissionDate);
console.log('matéria:', calaca.subject);
console.log('matrícula:', calaca.enrollment);

const carlim = new Student(
  'Carlim',
  new Date('1991-02-03'),
  [10, 10, 10, 10],
  [9.5, 9.5]
);

console.log(carlim);

console.log('contagem:', Student.count);
