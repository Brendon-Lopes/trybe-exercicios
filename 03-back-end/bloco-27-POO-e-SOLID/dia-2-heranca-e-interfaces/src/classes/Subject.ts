class Subject {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  private validateName(name: string): void {
    if (name.length < 3) throw new Error('Name is too short');
  }
}

export default Subject;
