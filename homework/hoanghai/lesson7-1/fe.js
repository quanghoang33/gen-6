// 1. Curring
// 2. memoize
// 3. Explain: Javascript asynchronous, single-thread language mean?
// 4. Expain Event Loop

// Guess the output and explain:
// 5. What's the output?

// 6: output
// function sum(a,b) {
//     return a + b;
// }
// Answer: 12
// 'Javascript shit language see the string and + operator, it execution like add 2 string =))'

// 7. All object have prototypes?
// True

// 8. Duplicate with 6

// 9. Output of checkAge
// function checkAge(data) {
//     if (data === { age: 18 }) {
//       console.log('You are an adult!');
//     } else if (data == { age: 18 }) {
//       console.log('You are still an adult.');
//     } else {
//       console.log(`Hmm.. You don't have an age I guess`);
//     }
//   }
  
// checkAge({ age: 18 });
// compare obj with obj with not work, so answer is run to last else condition
  
// 10: 
// function getAge(...args) {
//     console.log(typeof args);
// }
// getAge(21);
// wtf... object, because you log typeof, not value

// 11: 
// function getAge() {
//     'use strict';
//     age = 21;
//     console.log(age);
//   }
  
// getAge();
// use strict force you define variable type, so the code error by not defined age 

// 12: How long is cool_secrect accessible?
// sessionStorage.setItem('cool_secret', 123);
// Answer: neu dong tab du lieu se bi xoa