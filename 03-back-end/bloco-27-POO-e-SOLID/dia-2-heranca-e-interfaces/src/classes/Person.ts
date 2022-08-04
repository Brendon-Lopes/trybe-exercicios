class Person {
  constructor(private _name: string, private _birthDate: Date) {
    this.name = _name;
    this.birthDate = _birthDate;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(value: Date) {
    this.validateBirthDate(value);
    this._birthDate = value;
  }

  static getAge(value: Date): number {
    return new Date().getFullYear() - value.getFullYear();
  }

  private validateName(value: string): void {
    if (value.length < 3) throw new Error('Name is too short');
  }

  private validateBirthDate(value: Date): void {
    if (value.getTime() > new Date().getTime()) throw new Error('Birth date is in the future');
    if (Person.getAge(value) > 120) throw new Error('Person must be less than 120 years old');
  }
}

export default Person;
