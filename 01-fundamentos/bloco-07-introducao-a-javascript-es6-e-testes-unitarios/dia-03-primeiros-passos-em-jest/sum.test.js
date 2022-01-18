const sum = require('./sum');

test('sum 4 + 5 returns 9', () => {
  expect(sum(4, 5)).toBe(9);
});

test('sum 0 + 0 returns 0', () => {
  expect(sum(0, 0)).toBe(0);
});

test('sum 4 + "5" returns error', () => {
  expect(() => {
      sum(0, '5');
    }).toThrow();
});

test('sum 4 + "5" returns "parameters must be numbers"', () => {
  expect(() => {
    sum(0, '5');
  }).toThrow('parameters must be numbers');
});
