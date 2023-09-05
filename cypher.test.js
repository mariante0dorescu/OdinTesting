const cypher = require('./cypher');

test('check if the function exists', () => {
  expect(typeof cypher).toEqual('function');
});

test('if the function returns error when called with empty string', () => {
  expect(cypher()).toEqual('No empty strings allowed');
});

test('"aaabbbccc" becomes "bbbcccddd"', () => {
  expect(cypher('aaabbbccc')).toEqual('bbbcccddd');
});

test('"aAabBbzZz" becomes "bBbcCcaAa"', () => {
  expect(cypher('aAabBbzZz')).toEqual('bBbcCcaAa');
});

test('"a1ab#bc c" becomes "b1bc#cd d"', () => {
  expect(cypher('a1ab#bc c')).toEqual('b1bc#cd d');
});

test('"boy is moving" with a shift 2 becomes "b1bc#cd d"', () => {
  expect(cypher("boy is moving",2)).toEqual("dqa ku oqxkpi");
});

test('"i really need to sleep early tonight!" with a shift 6 becomes "o xkgrre tkkj zu yrkkv kgxre zutomnz!"', () => {
  expect(cypher("i really need to sleep early tonight!",6)).toEqual("o xkgrre tkkj zu yrkkv kgxre zutomnz!");
});
