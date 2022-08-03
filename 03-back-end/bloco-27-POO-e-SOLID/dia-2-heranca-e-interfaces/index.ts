import Person from './src/classes/Person';

const person = new Person('John', new Date(2000, 0, 1));
console.log(Person.getAge(person.birthDate)); // printa idade de John

// const person3 = new Person('Subaru', new Date('1800-01-01'));
// exemplo acima lança um erro.

class Student extends Person {
  private _enrollment: number;
  private _testsGrades: [number, number, number, number];
  private _homeWorkGrades: [number, number];

  constructor(
    name: string,
    testsGrades: [number, number, number, number],
    homeWorkGrades: [number, number],
    birthDate: Date,
  ) {
    super(name, birthDate);
    this._enrollment = Number((Math.floor(Math.random() * 100) + 1).toFixed(3));
    this._testsGrades = testsGrades;
    this._homeWorkGrades = homeWorkGrades;
  }

  getGradesSum(): number {
    return this._testsGrades
      .reduce((acc, curr) => acc + curr, 0) + this._homeWorkGrades.reduce((acc, curr) => acc + curr, 0);
  }

  getGradesAverage(): number {
    return this.getGradesSum() / 6;
  }
}

const student = new Student("Subaru", [6, 5, 7, 6], [5, 7], new Date('2000-01-01'));
console.log(student.getGradesSum());
console.log(student.getGradesAverage());
