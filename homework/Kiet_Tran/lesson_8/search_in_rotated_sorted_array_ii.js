/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    var n= nums.length;
    
    if (n == 0) {
        return false;
    }

    var start = 0;
    var end = n - 1;

    while(start <= end) {
        var mid = start + (end - start) / 2;

        if (nums[mid] == target) {
            return true;
        }

        if (!isBinarySearch(nums, start, nums[mid])) {
            start++;
            continue;
        }

        var pivotArray = existsInFirst(nums, start, nums[mid]);
        var targetArray = existsInFirst(nums, start, target);
        if (pivotArray ^ targetArray) {
            if (pivotArray) {
                start = mid++;
            } else {
                end = mid--;
            }
        } else {
            if (nums[mid] < target) {
                start = mid++;
            } else {
                end = mid--;
            }
        }
    }

    return false;
};

var isBinarySearch = function(array, start, element) {
    return array[start] != element;
}

var existsInFirst = function(array, start, element) {
    return array[start] <= element;
}
