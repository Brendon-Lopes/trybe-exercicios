import Person from './Person';
import IEmployee from '../interfaces/IEmployee';

class Teacher extends Person implements IEmployee {
  private _subject: string;
  public registration: string;
  public salary: number;
  public admissionDate: Date;

  constructor(name: string, birthDate: Date, salary: number,subject: string) {
    super(name, birthDate);

    this.salary = salary;
    this._subject = subject;
    this.admissionDate = new Date();
    this.registration = this.generateRegistration();
  }

  get subject(): string {
    return this._subject;
  }

  set subject(value: string) {
    this._subject = value;
  }

  public generateRegistration(): string {
    //generate random 16 digit alphanumeric string
    const random = Math.random().toString(36).substring(2, 18)
      + Math.random().toString(36).substring(2, 18);

    return random.substring(0, 16);
  }
}

const teacher = new Teacher('John', new Date(1980, 1, 1), 1000, 'Math');
console.log(teacher.registration, teacher.registration.length);
