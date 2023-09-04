const arrayAnalyzer = require('./arrayanalizer');

test('Test object match', () => {
  expect(arrayAnalyzer([1,8,3,4,2,6])).toMatchObject({
    "average": 4,
    "length": 6,
    "max": 8,
    "min": 1,
  })
});



