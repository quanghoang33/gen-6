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
 var longestZigZag = function(root) {
  let result = 0
  function maxZigZag(node, direction, currentLength) {
      if(!node) return
      result = (result > currentLength) ? result : currentLength
      // Math.max(result, currentLength)
      if (direction === 'left') {
          maxZigZag(node.left, 'left', 1) // consider it a new start and go left
          maxZigZag(node.right, 'right', currentLength + 1) // keep it parent start and follow rule, go right
      } else if (direction === 'right'){
          maxZigZag(node.right, 'right', 1) // consider new start and go right
          maxZigZag(node.left, 'left', currentLength + 1)   // keep it parent start and follow rule, now must go let
      }
  }
  maxZigZag(root, 'left', 0)
  return result
};