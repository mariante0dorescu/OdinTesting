
function encode(str, shift = 1) {
  if(!str) return "No empty strings allowed";
  
  let encoded = '';
  
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

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
  //const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const numbers = '0123456789'.split('');
  if (numbers.includes(letter)) {
    return letter;
  }
}

function isUpperCase(letter) {
  return letter === letter.toUpperCase() && letter !== letter.toLowerCase();
}

// other implementation

function shift(letter, k, code) {
  return String.fromCharCode(((letter.charCodeAt() - code + k) % 26 ) + code);
}

function caesarCypher(str, k) {
  return str
    .replace(/[a-z]/g, char => shift(char, k, 97)).replace(/[A-Z]/g, char => shift(char, k, 65));
}

function runTime(func) {
  let start = performance.now();
  console.log('Output: ', func)
  let end = performance.now();
  console.log(`Total time ${end - start} miliseconds`);
}

runTime(caesarCypher('abc!!!aaaa', 1))
runTime(encode('abc!!!aaaa', 1))

module.exports = encode;