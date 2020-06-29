// FUNCTION IMPLEMENTATION 
//template literals, template strings
//which allow you to insert variables / JS into strings by using back-ticks `` and the ${} symbol.

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

//this is used for other files, do not delete
module.exports = assertEqual;
