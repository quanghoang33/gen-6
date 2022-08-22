/**
 * https://leetcode.com/problems/two-sum-bsts/
 * 
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @param {number} target
 * @return {boolean}
 */
var twoSumBSTs = function(root1, root2, target) {
    var list = [];
    var s = inorder(root1, target, list);
    return inCheck(root2, s);
};

var inorder = function(node, target, list) {
    if (!node) {
        return list;
    }

    inorder(node.left, target, list);
    list.push(target - node.val);
    inorder(node.right, target, list);

    return list;
}

var inCheck = function(node, s) {
    if (!s) {
        return false;
    }

    return inCheck(node.left, s) || s.includes(node.val) || inCheck(node.right, s);
}
