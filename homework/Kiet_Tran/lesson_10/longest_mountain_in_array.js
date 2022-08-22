/**
 * https://leetcode.com/problems/longest-mountain-in-array/
 * 
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
    var n = arr.length;
    var answer = 0;
    var base = 0;

    while(base < n) {
        var end = base;

        if (end + 1 < n && arr[end] < arr[end + 1]) {
            while(end + 1 < n && arr[end] < arr[end + 1]) {
                end++;
            }

            if (end + 1 < n && arr[end] > arr[end + 1]) {
                while(end + 1 < n && arr[end] > arr[end + 1]) {
                    end++;
                }

                answer = Math.max(answer, end - base + 1);
            }
        }

        base = Math.max(end, base + 1);
    }

    return answer;
};
