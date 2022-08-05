import Person from './Person';
import IEnrollable from '../interfaces/IEnrollable';

class Employee extends Person implements IEnrollable {
  private _admissionDate: Date;

  constructor(_name: string, _birthDate: Date, private _salary: number) {
    super(_name, _birthDate);
    this.salary = _salary;
    this._admissionDate = new Date();
  }

  set salary(value: number) {
    if (value < 0) throw new Error('Salary can not be lower than 0');
    this._salary = value;
  }

  get salary() {
    return this._salary;
  }

  get admissionDate() {
    return this._admissionDate;
  }
}

export default Employee;
