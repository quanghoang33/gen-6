/**
 * @param {string} pattern
 * @return {string}
 */
// Runtime: 127 ms, faster than 23.94% of JavaScript online submissions for Construct Smallest Number From DI String.
// Memory Usage: 45.5 MB, less than 21.13% of JavaScript online submissions for Construct Smallest Number From DI String.
var minimumStarted = (length) => {f
  switch (length) {
      case 1:
          return [2, 1]
      case 2:
          return [3,2,1]
      case 3:
          return [4,3,2,1]
      case 4:
          return [5,4,3,2,1]
      case 5:
          return [6,5,4,3,2,1]
      case 6:
          return [7,6,5,4,3,2,1]
      case 7:
          return [8,7,6,5,4,3,2,1]
      case 8:
          return [9,8,7,6,5,4,3,2,1]
  }
}

var smallestNumber = function(pattern) {
  let stack = minimumStarted(pattern.length)
  let tempo = []
  let minimum = []
  for (let c of pattern) {
      if (c === 'I') {
          let candidate = stack.pop()
          if(tempo.length === 0) {
              minimum.push(candidate)
          }
          else {
              tempo.push(candidate)
              while (tempo.length > 0) {
                  let value = tempo.pop()
                  minimum.push(value)
              }
          }
      }
      else { // === 'D'
          let cadidate = stack.pop()
          tempo.push(cadidate)
      }
  }
  while(stack.length > 0) {
      let candidate = stack.pop()
      tempo.push(candidate)
  }
  while(tempo.length > 0) {
      let candidate = tempo.pop()
      minimum.push(candidate)
  }
  let result = ''
  for (let c of minimum) {
      result += c
  }
  return result
};