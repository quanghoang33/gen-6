/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// Size: O(1)
// Time: O(n)
// I love this algorithm
var longestOnes = function(nums, k) {
    let numZeros = 0
    let index = 0
    let maximumSize = 0
    while(index < nums.length){
        if (nums[index]===0) {
            numZeros+=1
        }
        if (numZeros <= k) {
            maximumSize += 1
        } else {
           if (nums[index-maximumSize] === 0) {
            numZeros-=1
           }
        }
        index++
    }
    return maximumSize
};