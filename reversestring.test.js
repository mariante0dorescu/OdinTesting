const reverse = require('./reversestring');

test('test reversed string of doom equals mood', () => {
  expect(reverse('doom')).toBe('mood');
});
