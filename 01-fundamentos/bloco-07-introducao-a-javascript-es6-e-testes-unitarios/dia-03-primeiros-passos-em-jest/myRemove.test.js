const myRemove = require('./myRemove');

test('myRemove ([1, 2, 3, 4], 3) returns [1, 2, 4]', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
});

test('myRemove ([1, 2, 3, 4], 3) do not return [1, 2, 3, 4]', () => {
  expect(myRemove([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4]);
});

test('myRemove ([1, 2, 3, 4], 5) returns [1, 2, 3, 4]', () => {
  expect(myRemove([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
});
