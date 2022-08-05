import Person from './Person';
import IEnrollable from '../interfaces/IEnrollable';

class Student extends Person implements IEnrollable {
  static count: number = 0;

  constructor(
    _name: string,
    _birthDate: Date,
    private _examsGrades: [number, number, number, number],
    private _worksGrades: [number, number]
  ) {
    super(_name, _birthDate);
    Student.count += 1;
  }

  public get sumGrades() {
    const sum =
      this._examsGrades.reduce((a, b) => a + b, 0) +
      this._worksGrades.reduce((a, b) => a + b, 0);

    return sum;
  }

  public get sumAverageGrade() {
    const average = this.sumGrades / 6;

    return average.toFixed(1);
  }
}

export default Student;
