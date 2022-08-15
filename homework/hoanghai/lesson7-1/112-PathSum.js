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
 * @param {number} targetSum
 * @return {boolean}
 */

 var hasPathSum = function(root, targetSum) {
  if (!root) {
      return false
  }
  let stack = [[root, root.val]]
  while(stack.length) {
      [node, pathSum] = stack.shift()
      if (!node.left && !node.right) {
          if (pathSum === targetSum) {
              return true
          }
      }
      else {
          if (node.left) {
              stack.push([node.left, pathSum + node.left.val])
          }
          if (node.right) {
              stack.push([node.right, pathSum + node.right.val])
          }
      }
  }
  return false
};