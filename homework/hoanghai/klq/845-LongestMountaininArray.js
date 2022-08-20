/**
 * @param {number[]} arr
 * @return {number}
 */
// [2,1,4,7,3,2,5]
// [2,2,2]
// [0,1,2,3,4,5,4,3,2,1,0]
// [0,1,0]
// [2,0,2,0]
// [1,1,0,0,1,0]
// [40,51,29,19,50,25]
// [0,0,1,0,0,1,1,1,1,1]
// Complex thing in this problem is you have to cover all of this upper test case, some test contain 2 number next to each other equal, or all the arr pass
// becarefull with your condition, >=, <=, <, >
var longestMountain = function(arr) {
    let res = 0;
    let n = arr.length
    let slow = 0, fast = 0
    let peak = 0
    while(fast < n) {
        fast += 1
        if (arr[fast] > arr[fast-1] && arr[fast] > arr[fast + 1]){
            // => peak candidate
            peak = fast
        }
        if (arr[fast] <= arr[fast+1]) {
            if (slow < peak && peak < fast) {
                if ((fast-slow + 1) >= res && arr[slow] < arr[peak] && arr[peak] > arr[fast]) {
                    res = (fast - slow + 1)
                }
                slow = fast
            }
            if (arr[fast] <= arr[fast-1] && arr[fast] <= arr[fast+1]) {
                // update foot candidate (new start)
                slow  =  fast
            }
        }
    }
    if (slow < peak && peak < fast) { // edgecase: full arr is pass condition, so slow is not > peak anytime :))
        if (fast-slow >= res) {
            res = (fast-slow)
        }
    }
    if (res < 3) {
        res = 0
    }
    return res
};
