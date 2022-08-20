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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
// Clarify: return the ROOT node of the array output.
// So the problem we must forcus on:
// + What is the target root node
// + How to remove another node that not pass condition range
// Let discuss on example: 
    //         3
    //     0       4
    //   -    2   -  -
    // -  -  1  -
// 3 => pass condition => create a new tree with 3 is root.
// left and right is 3 left and right, but we must to deep down to lower level
// so that run dfs with node.left and node.right.
// if candidate root is not pass range => only keep left or right of it => dfs in there to choose
// dfs 4 not pass => null => 3 ? null
// (?) dfs with 0 => not pass, null and 2 is consider, null remove, 2 pass ... vv
// Time: no matter how much recursion => only max n candidate if compare with range => O(n)
// Space: if candidate root invalid => zero, else, must create new Tree, worst case a off them pass we has to create n new tree (n*n)
var trimBST = function(root, low, high) {
    function dfs(root) {
        if (!root) {
            return null
        }
        if(low <= root.val && root.val <= high) {
            return new TreeNode(root.val, dfs(root.left), dfs(root.right))
        }
        return dfs(root.left) || dfs(root.right)
    }
    return dfs(root)
};