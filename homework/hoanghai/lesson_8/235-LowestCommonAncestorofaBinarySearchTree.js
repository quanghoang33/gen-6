/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

//Eplaination:
// We must to find father of p and q, and it's must be the lowest.
// Will dont know that => p and q is on the same (left or right branch) or different 
// branch with it's father (target), we must solve this problem by consider the current node as candidate...
//     6
//    2    8
//   0 4  7 9
// - - 3,5
// In case 1 (base, nice case): p and q is in different branch, one in left, one in right => easily see that the top root is only one answer
// => easy return with this pattern. (Example: 2 and 9 => 6 is only one father true)
// In case 2: p and q must in the same child branch (just in the left or right) => we only have to dig, deep down the root to one side of BST, and it's come closer
// and closer to the base case for each recursion call.
 var lowestCommonAncestor = function(root, p, q) {
    if(!root) {
        return null
    }
    // current node candidate largest then 2 value => must find in smaller area => to the left
    else if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q)
    }
    else if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q)
    }
    return root
};