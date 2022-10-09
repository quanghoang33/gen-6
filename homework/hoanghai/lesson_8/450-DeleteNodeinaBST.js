/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 *
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */

// Idea: if the node is leaf node (no left and right, return nothing
// If is has children, select the largest child of the left of it => return new TreeNode (his father, father left is root.right, null) i think                               



var deleteNode = function(root, key) {
    function findTheMostLeftNode(root) {
         while(root && root.left !== null) {
             root = root.left
         }
         return root
    }
    function findTheLeastRight(root) {
         while(root && root.right !== null) {
             root = root.right
         }
         return root
    }
    if(!root) {
        return null
    }
    if (root.val > key) {
        root.left = deleteNode(root.left, key)
    } else if(root.val < key) {
        root.right = deleteNode(root.right, key)
    } else {
        // this is the key we need to find
      if (root.left === null && root.right === null) { // no child
          root = null
          return null
      }
      if (root.left != null && root.right == null) { // has only left child
          root = root.left
          return root
      }
      if (root.left == null && root.right != null) { // has only right child 
         root = root.right
         return root
      }
      // 1st: method: find the lowest value of right child to swap   
      // let temp = findTheMostLeftNode(root.right)
      // let tempVal = root.val
      // root.val = temp.val
      // temp.val = tempVal
      // root.right = deleteNode(root.right, key)
        
      // 2nd method: find the largest value of left child to swap  
      let temp = findTheLeastRight(root.left)
      let tempVal = root.val
      root.val = temp.val
      temp.val = tempVal
      root.left = deleteNode(root.left, key)   
    }
 
    return root 
 };
 
 // space: O(Height of tree) height of tree => min ~ log (N), max n-1
 // time complexity: worst case for find key in arr => O(Height of tree), time find largest left => O(height of tree), to swap node with candidate O(1) => O(height of tree) 