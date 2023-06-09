// Input: abcaaabbb
// Output: abca3b3


// Input: abcd
// Output: abcd


// Param: str - string input
// Output: the compress message of the given input
function compressMessage(str) {
  let ans = '';
  let pointer = 0;
  const size = str.length;
  
  while(pointer < size) {
    let nextCharPos = pointer;

    while( nextCharPos < size && str[nextCharPos] === str[pointer]) {
      nextCharPos += 1;
    }
    const count = nextCharPos - pointer;
    if(count === 1) ans += str[pointer];
    else ans += str[pointer] + count;
    pointer = nextCharPos;
  }

  return ans;
}

let input1 = 'abcaaabbb';
let output1 = 'abca3b3';
console.log(compressMessage(input1) === output1)

input1 = 'abcd';
output1 = 'abcd';
console.log(compressMessage(input1) === output1)


input1 = 'aaabaaaaccaaaaba';
output1 = 'a3ba4c2a4ba';
console.log(compressMessage(input1) === output1)
    


