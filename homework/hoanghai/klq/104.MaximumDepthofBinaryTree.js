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
 var maxDepth = function(root) {
    function dfs(root, count) {
        if(!root) {
            return count
        }
        return Math.max(dfs(root.left, count + 1), dfs(root.right, count + 1))
    }
    return dfs(root, 0)
 };