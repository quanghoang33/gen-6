/**
 * https://leetcode.com/problems/symmetric-tree/
 * 
 * @param {*} root 
 */
var isSymmetric = function(root) {
    return isMirror(root, root);
};

var isMirror = function(node1, node2) {
    if (!node1 && !node2) {
        return true;
    }

    if (!node1 || !node2) {
        return false;
    }

    var result = (node1.val == node2.val) && isMirror(node1.right, node2.left) && isMirror(node1.left, node2.right);
    return result;
}
