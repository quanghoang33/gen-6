/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var characterReplacement = function(s, k) {
  let count = {}
  let left = 0
  let right = 0
  let result = 0
  while (right < s.length) {
      if (count[s[right]]) {
          count[s[right]] += 1
      } else {
          count[s[right]] = 1
      }
      let maxFrequentcy = Math.max(...Object.values(count))
      if (((right - left + 1) - maxFrequentcy) > k) {
          count[s[left]] -= 1 // must delete before slide window to the left
          left += 1
      }
      result = Math.max(result, right - left + 1)
      right++
  }
  return result
};