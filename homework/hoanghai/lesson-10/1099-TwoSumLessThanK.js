/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var twoSumLessThanK = function(nums, k) {
    nums = nums.sort((a,b) => a - b)
    let L = 0
    let R = nums.length - 1
    let max = -1
    let sum = -1
    while (L < R) {
        sum = nums[L] + nums[R]
        if (sum < k) { 
            if (sum >= max) {
                max = sum
            }
            L++
        }
        else {
            R--
        }
    }
    return max
};