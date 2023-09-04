const calculator = {
  add: (num1, num2) => {
    if(isValidNumber(num1) && isValidNumber(num2)) {
      return num1 + num2;
    } else {
      return 'Arguments are not valid'
    }
  },
  substract: (num1, num2) => num1 - num2,
  divide: (num1, num2) => num1 / num2,
  multiply: (num1, num2) => num1 * num2,
}

// helper
function isValidNumber(num) {
  if (typeof num === 'number') {
    return true;
  } else {
    return false;
  }
}

module.exports = calculator;