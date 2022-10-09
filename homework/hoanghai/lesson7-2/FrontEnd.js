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
// obj = { 1: 'a', 2: 'b', 3: 'c' };
// const set = new Set([1, 2, 3, 4, 5]);
// obj.hasOwnProperty('1');
// obj.hasOwnProperty(1);
// set.has('1');
// set.has(1);
// Explain: Object does not strict type of key, so it's true, set is strict type, so '1' is invalid => false
// Result: true, true, false, true

// Question 6:
// Click to html paragraph, the event with log 2 value: p div 
// Explain: in Js, there is event called: event bubling, the event click you trigger in child element and continue trigger in parent element if it has @click AudioListener

// Question 7:
// const person = { name: 'Lydia' };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 21));
// console.log(sayHi.bind(person, 21));
// call => lydia is 21
// bind => Function
// Explain: call, apply, bind is use when we want to change context execution, but call different with bind:
// + call invokes the function and allow you to pass in arg.
// + bing return new function allowing you to pass in array and number of argument

// Question 8:
// const firstPromise = new Promise((res, rej) => {
//     setTimeout(res, 500, 'one');
//   });
  
//   const secondPromise = new Promise((res, rej) => {
//     setTimeout(res, 100, 'two');
//   });
  
// Promise.race([firstPromise, secondPromise]).then(res => console.log(res));
// Answer: two
// Explain: Promise.race is new method of Promise, it;s input is arr of Promise, and just 1 of them is resolve or reject (finish), the method will done and stop
// The firstPromise done in 500, the second 100ms, the second done first so Promise.race get it result

// Question 9: Guess the output.
// const value = { number: 10 };

// const multiply = (x = { ...value }) => {
//   console.log((x.number *= 2));
// };

// multiply(); => 20
// multiply(); => 20
// multiply(value); => 20
// multiply(value); => 40

// I dont know why...

// Question 10: 
// class Dog {
//     constructor(name) {
//         this.name = name;
//     }
// };
  
// class Labrador extends Dog {
//     // 1
//     constructor(name, size) {
//         this.size = size;
//     }
//     // 2
//     constructor(name, size) {
//         super(name);
//         this.size = size;
//     }
//     // 3
//     constructor(size) {
//         super(name);
//         this.size = size;
//     }
//     // 4
//     constructor(name, size) {
//         this.name = name;
//         this.size = size;
//     }
  
// };
// Answer: 2 is true
  


