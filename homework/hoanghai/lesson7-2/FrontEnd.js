// Question 1: Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to. Make two variants of the solution.
// Using setInterval.
// Using nested setTimeout.
// Answer 1: Setinterval
// function printNumbers(from, to) {
//     let count = from
//     let myInterval = setInterval(() => {
//         console.log(count)
//         count = count + 1
//         if (count > to) {
//             clearInterval(myInterval);
//           }
//     }, 1000)  
// }
// printNumbers(5,10)
// Answer 2: nested setimeout

function printNumbers(from, to) {

}

// Question 2: Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.

// let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]
// Answer
// function flattenListOfArr(arr) {
//     const result = arr.reduce((total, amount) => {
//         return total.concat(amount)
//     }, []);
//     return result
// }
// const arrays = [[1,2,3],[4,5],[6,7]]
// console.log(flattenListOfArr(arrays))

// Question 3: High Order Function

// Question 4: Question 4: Write a function, deepEqual, that takes two values and returns true only if they are the same
// value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.

// Question 5:
// Out put with set and Objectconst
obj = { 1: 'a', 2: 'b', 3: 'c' };
const set = new Set([1, 2, 3, 4, 5]);
obj.hasOwnProperty('1');
obj.hasOwnProperty(1);
set.has('1');
set.has(1);
// Explain: Object does not strict type of key, so it's true, set is strict type, so '1' is invalid => false
// Result: true, true, false, true

