abstract class Person {
  public enrollment: string;

  constructor(private _name: string, private _birthDate: Date) {
    this.name = _name;
    this.birthDate = _birthDate;
    this.enrollment = this.generateEnrollment();
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    Person.validateName(value);
    this._name = value;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(value: Date) {
    Person.validateBirthDate(value);
    this._birthDate = value;
  }

  static getAge(value: Date): number {
    return new Date().getFullYear() - value.getFullYear();
  }

  private static validateName(value: string): void {
    if (value.length < 3) throw new Error('Name is too short');
  }

  private static validateBirthDate(value: Date): void {
    if (value.getTime() > new Date().getTime()) {
      throw new Error('Birth date is in the future');
    }
    if (Person.getAge(value) > 120) {
      throw new Error('Person must be less than 120 years old');
    }
  }

  public generateEnrollment(): string {
    const random =
      Math.random().toString(36).substring(2, 18) +
      Math.random().toString(36).substring(2, 18);

    return random.substring(0, 16);
  }
}

export default Person;
