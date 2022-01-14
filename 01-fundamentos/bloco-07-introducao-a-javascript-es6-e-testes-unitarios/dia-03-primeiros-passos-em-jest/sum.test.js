const sum = require('./sum');

test('sum 4 + 5 returns 9', () => {
  expect(sum(4, 5)).toBe(9);
});
