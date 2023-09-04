const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

function encode(str, shift = 1) {
  let encoded = '';

  for (const letter of str.split('')) {
    if (checkPunctation(letter) || checkNumber(letter)) {
      encoded += letter;
    } else if (letters.indexOf(letter.toLowerCase()) + shift >= letters.length) {
      if (isUpperCase(letter)) {
        encoded += letters[letters.indexOf(letter.toLowerCase()) + shift - letters.length].toUpperCase();
      } else {
        encoded += letters[letters.indexOf(letter) + shift - letters.length];
      }
    } else {
      if (isUpperCase(letter)) {
        encoded += letters[letters.indexOf(letter.toLowerCase()) + shift].toUpperCase();
      } else {
        encoded += letters[letters.indexOf(letter) + shift];
      }
    }
  }

  return encoded;
}

// helper
function checkPunctation(letter) {
  punctation = [
    ' ',
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '[',
    ']',
    '{',
    '}',
    ':',
    ';',
    '"',
    "'",
    '|',
    ',',
    '.',
    '?',
    '/',
    '+',
    '-',
    '=',
    '~',
    '`',
  ];
  if (punctation.includes(letter)) {
    return letter;
  }
}

function checkNumber(letter) {
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  if (numbers.includes(letter)) {
    return letter;
  }
}

function isUpperCase(letter) {
  return letter === letter.toUpperCase() && letter !== letter.toLowerCase();
}

module.exports = encode;
