/**
 * @param {string} s
 * @return {number[]}
 */
 var diStringMatch = function(s) {
  let start = 0
  let end = s.length //because it start from 0 :))
  let candidateList = []
  let result = []
  for (let i = 0; i <= s.length; i++) {
      candidateList.push(i)
  }
  for (let character of s) {
      if (character === 'I'){
          result.push(candidateList[start])
          candidateList[start] = -1
          start++
      }
      else if (character === 'D') {
          result.push(candidateList[end])
          candidateList[end] = -1
          end--
      }
  }
  for (let item of candidateList) {
      if (item !== -1) {
          result.push(item)
      }
  }
  return result
};