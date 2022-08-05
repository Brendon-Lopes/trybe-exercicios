import Employee from './Employee';

class Teacher extends Employee {
  constructor(
    name: string,
    birthDate: Date,
    salary: number,
    private _subject: string
  ) {
    super(name, birthDate, salary);

    this.salary = salary;
    this.subject = _subject;
  }

  get subject(): string {
    return this._subject;
  }

  set subject(value: string) {
    this._subject = value;
  }
}

export default Teacher;
