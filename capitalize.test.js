const capitalize = require('./capitalize');

test('Capitalize first letter of name theodinproject', () => {
  expect(capitalize('theodinproject')).toBe('Theodinproject');
});

