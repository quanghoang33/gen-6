/**
 * https://leetcode.com/problems/4sum/
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort();
    return kSum(nums, target, 0, 4);
};

var kSum = function(nums, target, start, k) {
    var result = [];

    if (start == nums.length) {
        return result;
    }

    var average = target / k;

    if (nums[start] > average || average > nums[nums.length - 1]) {
        return result;
    }

    if (k == 2) {
        return twoSum(nums, target, start);
    }

    for (var i = start; i < nums.length; i++) {
        if (i == start || nums[i - 1] != nums[i]) {
            for (sub in kSum(nums, target - nums[i], i + 1, k - 1)) {
                result.push(nums[i]);
                result = result.concat(sub);
            }
        }
    }

    return result;
};

var twoSum = function(nums, target, start) {
    var result = [];
    var low = start;
    var high = nums.length - 1;

    while(low < high) {
        var currentSum = nums[low] + nums[high];
        if (currentSum < target || (low > start && nums[low] == nums[low - 1])) {
            low++;
        } else if (currentSum > target || (high < nums.length - 1 && nums[high] == nums[high + 1])) {
            high--;
        } else {
            result.push(nums[low], nums[high]);
            low++;
            high--;
        }
    }
    
    return result;
};
