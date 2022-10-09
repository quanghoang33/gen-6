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
 var minDepth = function(root) {
    // bai nay co truong hop node lien tiep chi co 1 ben nen can xet lai cac truong hop can than
    function dfs(root, count) {
        if(!root) {
            return count
        }
        if (!root.left && root.right) {
            return (dfs(root.right, count+1))
        }
        if (!root.right && root.left) {
            return dfs(root.left, count+1)
        }
        if (!root.left && !root.right) {
            return (count+1)
        }
        if (root.left && root.right) {
            return Math.min(dfs(root.left, count+1), dfs(root.right, count+1))
        }
    }
    return dfs(root, 0)
};