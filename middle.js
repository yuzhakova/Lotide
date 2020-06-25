const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const middle = function(array) {
  let midArray = Math.floor((array.length / 2));
  //console.log(midArray);
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
      // For arrays with an even number of elements, an array containing the two elements in the middle should be returned
    return [array[midArray]];
  } else {
    return ([array[midArray - 1], array[midArray]]);
  }
};
// middle([1, 2, 3, 4, 5]);
// middle([1, 2, 3, 4, 5, 6])
console.log(middle([1, 2]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6]));


console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));