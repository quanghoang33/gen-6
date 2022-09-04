// Solution for https://leetcode.com/problems/merge-k-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
  const queue = new MinPriorityQueue({ priority: x => x.val });
  
  for(const head of lists) {
      if(head) queue.enqueue(head)
  }
  
  let res = new ListNode();
  const head = res;
  
  while(queue.isEmpty() === false) {
      const { val, next } = queue.dequeue().element;
      res.next = new ListNode(val);
      res = res.next;
      
      if(next) queue.enqueue(next);
  }
  
  return head.next;
};