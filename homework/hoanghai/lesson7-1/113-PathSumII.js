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
 * @return {number[][]}
 */
// [5,4,8,11,null,13,4,7,2,null,null,5,1]
// 22
// [1,2,3]
// 5
// []
// 1
var pathSum = function(root, targetSum) {
  let result = []
  if (!root) {
      return []
  }
  let stack = [[root, root.val, [root.val]]]
  while(stack.length) {
      [node, sum, paths] = stack.shift()
      if (!node.left && !node.right) {
          if (sum === targetSum) {
              result = [...result, paths]
          }
      }
      else {
          if (node.left) {
              let currentPath = [...paths, node.left.val]
              stack.push([node.left, sum + node.left.val, currentPath])
          }
          if (node.right) {
              let currentPath = [...paths, node.right.val]
              stack.push([node.right, sum + node.right.val, currentPath])
          }
      }
  }
  return result
};