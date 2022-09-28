//  Solution for https://leetcode.com/problems/next-greater-element-i/

var nextGreaterElement = function (nums1, nums2) {
  const stack = [];
  const map = {};

  for (const num of nums2) {
    while (stack.length > 0 && stack[stack.length - 1] < num) {
      map[stack.pop()] = num;
    }
    stack.push(num);
  }
  return nums1.map(num => map[num] || -1);
};