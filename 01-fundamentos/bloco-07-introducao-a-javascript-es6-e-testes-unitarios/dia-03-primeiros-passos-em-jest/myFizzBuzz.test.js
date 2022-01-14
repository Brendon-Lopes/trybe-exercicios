const myFizzBuzz = require('./myFizzBuzz');

test('myFizzBuzz receives 15 and returns fizzbuzz', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
});

test('myFizzBuzz receives 3 and returns fizz', () => {
  expect(myFizzBuzz(3)).toBe('fizz');
});

test('myFizzBuzz receives 5 and returns buzz', () => {
  expect(myFizzBuzz(5)).toBe('buzz');
});

test('myFizzBuzz receives 2 and returns 2', () => {
  expect(myFizzBuzz(2)).toBe(2);
});

test('myFizzBuzz receives "15" and returns false', () => {
  expect(myFizzBuzz('15')).toBe(false);
});
