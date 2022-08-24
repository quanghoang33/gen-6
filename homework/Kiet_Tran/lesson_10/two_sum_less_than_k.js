/**
 * https://leetcode.com/problems/two-sum-less-than-k/
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function(nums, k) {
    nums.sort();

    var answer = -1;
    var left = 0;
    var right = nums.length - 1;

    while(left < right) {
        var sum = nums[left] + nums[right];
        if (sum < k) {
            answer = Math.max(answer, sum);
            left++;
        } else {
            right--;
        }
    }

    return answer;
};
