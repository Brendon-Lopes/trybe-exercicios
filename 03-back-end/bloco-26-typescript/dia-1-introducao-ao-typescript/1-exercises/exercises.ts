export function greeter(name: string) {
  return `Olá ${name}!`;
}

export function personAge(name: string, age: number) {
  return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}

export function square(side: number): number {
  return side ** 2;
}

export function rectangle(base: number, height: number): number {
  return base * height;
}

export function diamond(d1: number, d2: number): number {
  return (d1 * d2) / 2;
}

export function trapezoid(h: number, b1: number, b2: number): number {
  return ((b1 + b2) * h) / 2;
}

export function circle(r: number): number {
  return (r ** 2) * 3.14;
}
