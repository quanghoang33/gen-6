/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var rob = function(root) {
  if(root === null) {
      return [0 , 0]
  }
  function consultant(node) {
      if(node === null) {
          return [0, 0]
      } else {
         let left = consultant(node.left)
         let right = consultant(node.right)
         let rob = node.val + left[1] + right[1] // rob the root
         let not = Math.max(...left) + Math.max(...right) // not rob the root
         return [rob, not]
      }
  }
  return Math.max(...consultant(root))
};
// Eplaination: The problem seem complex but actually we just has 2 choice:
// 1. Rob the root, not rob it's child, and choose the next child.
// 2. Not rob the root, rob it's child, by pass next
// So we need to recursive with the base return value is the arr with 2 element val [max-if-we-rob, else-not-rob]
// deepdown to each of it's child 