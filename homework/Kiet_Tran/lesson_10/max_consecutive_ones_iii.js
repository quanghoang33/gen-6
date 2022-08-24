/**
 * https://leetcode.com/problems/max-consecutive-ones-iii/
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    var n = nums.length;
    var left = 0;
    var right;

    for (right = 0; right < n; right++) {
        if (nums[right] == 0) {
            k--;
        }

        if (k < 0) {
            k += 1 - nums[left];
            left++;
        }
    }

    return right - left;
};
