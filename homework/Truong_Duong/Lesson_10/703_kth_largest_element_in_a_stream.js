// Solution for https://leetcode.com/problems/kth-largest-element-in-a-stream/

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.heap = new MinPriorityQueue();
  this.k = k;

  for (let i = 0; i < nums.length; i++) {
    this.heap.enqueue(nums[i]);
  }

  while (this.heap.size() > k) this.heap.dequeue().element;
};

/** 
* @param {number} val
* @return {number}
*/
KthLargest.prototype.add = function (val) {
  this.heap.enqueue(val);

  if (this.heap.size() > this.k) {
    this.heap.dequeue().element;
  }
  return this.heap.front().element;
};

/** 
* Your KthLargest object will be instantiated and called as such:
* var obj = new KthLargest(k, nums)
* var param_1 = obj.add(val)
*/