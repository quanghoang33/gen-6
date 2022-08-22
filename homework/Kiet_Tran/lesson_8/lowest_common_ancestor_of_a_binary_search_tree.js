/**
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 * 
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {

    var pVal = p.val;
    var qVal = q.val;
    var node = root;

    while(node) {
        var parentVal = node.val;
        if (pVal > parentVal && qVal > parentVal) {
            node = node.right;
        } else if (pVal < parentVal && qVal < parentVal) {
            node = node.left;
        } else {
            return node;
        }
    }

    return null;
};
