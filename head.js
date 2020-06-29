// mofified to reference
const assertEqual = require('./assertEqual');
const head = function(array) {
    return array[0];
};
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);
assertEqual(head([]), undefined);

module.exports = head;



// original: to include full assertEqual function code

// const assertEqual = function(actual, expected) {
//     if (actual === expected) {
//         console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//     } else {
//         console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//     }
// };

// const head = function(array) {
//         return array[0];
//     };
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([5]), 5);
// assertEqual(head([]), undefined);