const arrayAnalyzer = (array) => {
  return {
    "average": arrayInfo.average(array),
    "length": arrayInfo.size(array),
    "max": arrayInfo.max(array),
    "min": arrayInfo.min(array),
  }
}

// helpers
const arrayInfo = {
  average: (array) => {
    if (checkArray(array) && checkNumbers(array)) {
      return array.reduce((a, b) => a + b, 0) / array.length;
    } else {
      return 'Array is empty or invalid';
    }
  },
  min: (array) => {
    if (checkArray(array) && checkNumbers(array)) {
      return Math.min(...array);
    } else {
      return 'Array is empty or invalid';
    }
  },
  max: (array) => {
    if (checkArray(array) && checkNumbers(array)) {
      return Math.max(...array);
    } else {
      return 'Array is empty or invalid';
    }
  },
  size: (array) => {
    if (array.length > 0) {
      return array.length;
    } else {
      return 'Array is empty or invalid';
    }
  },
};

function checkArray(arr) {
  if (Array.isArray(arr)) {
    return true;
  }
  return false;
}

function checkNumbers(arr) {
  return arr.every((el) => {
    return typeof el === 'number';
  });
}
module.exports = arrayAnalyzer;
