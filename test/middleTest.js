const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
