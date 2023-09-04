const calculator = require('./calculator');

test('Check if 1 plus 1 equal 2', () => {
  expect(calculator.add(1,1)).toBe(2);
})

test('Check if "1" plus 1 equal Arguments are not valid', () => {
  expect(calculator.add("1",1)).toBe('Arguments are not valid');
})

test('Check if 1 minus 1 equal 0', () => {
  expect(calculator.substract(1,1)).toBe(0);
})

test('Check if 3 multiply by 3 equal 9', () => {
  expect(calculator.multiply(3,3)).toBe(9);
})

test('Check if 6 divided by 2 equal 3', () => {
  expect(calculator.divide(6,2)).toBe(3);
})