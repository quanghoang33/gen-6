
/**
 * https://leetcode.com/problems/delete-node-in-a-bst/
 * 
 * @param {*} root 
 * @param {*} key 
 */
var deleteNode = function(root, key) {
    if (!root) {
        return null;
    }

    if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else {
        if (!root.left && !root.right) {
            root = null;
        } else if (root.right) {
            root.val = getRight(root);
            root.right = deleteNode(root.right, root.val);
        } else {
            root.val = getLeft(root);
            root.left = deleteNode(root.right, root.val);
        }
    }

    return root;
};

var getRight = function(root) {
    root = root.right;

    while (root.left) {
        root = root.left;
    }

    return root.val;
}

var getLeft = function(root) {
    root = root.left;

    while (root.right) {
        root = root.right;
    }

    return root.val;
}
