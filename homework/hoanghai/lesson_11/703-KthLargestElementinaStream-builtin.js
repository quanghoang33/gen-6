/**
 * @param {number} k
 * @param {number[]} nums
 */
 var KthLargest = function(k, nums) {
  this.minheap = new MinPriorityQueue();
  this.k = k;
  nums.map(item => this.add(item)); 
};

/** 
* @param {number} val
* @return {number}
*/
KthLargest.prototype.add = function(val) {
  if (this.minheap.size() < this.k)
      this.minheap.enqueue(val);
  else if (this.minheap.front().element < val){
      this.minheap.enqueue(val);
      this.minheap.dequeue();
  }
  return this.minheap.front().element;    
};

/** 
* Your KthLargest object will be instantiated and called as such:
* var obj = new KthLargest(k, nums)
* var param_1 = obj.add(val)
*/