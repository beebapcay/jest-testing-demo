const math = require('../math');

test('adds 1 + 2 to equal 3', () => {
  expect(math.sum(1, 2)).toBe(3);
});

test('creates object from 1, 2, 3', () => {
  expect(math.createObject(1, 2, 3)).toEqual({ 1: 1, 2: 2, 3: 3 });
});

test('creates array from 1, 2, 3', () => {
  expect(math.createArray(1, 2, 3)).toEqual([1, 2, 3]);
});
