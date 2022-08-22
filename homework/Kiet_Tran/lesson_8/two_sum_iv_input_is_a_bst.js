/**
 * https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
 * 
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    var list = [];
    inorder(root, list);

    var left = 0;
    var right = list.length - 1;

    while(left < right) {
        var sum = list[left] + list[right];
        if (sum == k) {
            return true;
        }

        if (sum < k) {
            left++;
        } else {
            right--;
        }
    }

    return false;
};

var inorder = function(root, list) {
    if (!root) {
        return;
    }

    inorder(root.left, list);
    list.push(root.val);
    inorder(root.right, list);
}
