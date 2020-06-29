// FUNCTION IMPLEMENTATION 

const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
};
console.log(assertEqual("Natalia", "Natalia"));
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(123, 123));
console.log(assertEqual(3, 2));
module.exports = assertEqual;
