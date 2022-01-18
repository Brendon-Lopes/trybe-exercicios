const myFunctions = require('./encode_decode');
const encode = myFunctions.encode;
const decode = myFunctions.decode;

test('encode is a function', () => {
  expect(typeof encode).toBe('function');
});

test('decode is a function', () => {
  expect(typeof decode).toBe('function');
});

test('encode receives "aeiou" and returns "12345"', () => {
  expect(encode('aeiou')).toBe('12345');
});

test('decode receives "12345" and returns "aeiou"', () => {
  expect(decode('12345')).toBe('aeiou');
});

test('encode receives "aeiou5z" and returns "123455z"', () => {
  expect(encode('aeiou5z')).toBe('123455z');
});

test('decode receives 12345a6 and returns aeioua6', () => {
  expect(decode('12345a6')).toBe('aeioua6');
});

test('encode receives 5 characters and returns 5 characters', () => {
  expect(encode('aeiou').length).toBe(5);
});

test('decode receives 5 characters and returns 5 characters', () => {
  expect(decode('12345').length).toBe(5);
});
