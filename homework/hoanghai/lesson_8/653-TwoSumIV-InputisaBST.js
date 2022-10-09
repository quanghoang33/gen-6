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
 * @param {number} k
 * @return {boolean}
 */
 var stack = []
 var hashMap = {}
 function stackAllItem(root){
     if(!stack) {
         stack = []
     }
     if(root) {
         stack.push(root.val)
     }
     if(root.left) {
         stackAllItem(root.left)
     }
     if(root.right) {
         stackAllItem(root.right)
     }
 }
 var findTarget = function(root, k) {
     // Dont know how to use BST in this case, so i will destructuring it by stack and hashMap.
     // first, iterate all element in tree and push it to stack => o(n)
     // second, pop element out of stack and save value (key - value) to hash
     // if you pop all element but not found anything => false => Max o(n)
     // => Total: o(n) time, but need stack O(n) + hashMap O(n)
     if (!root) {
         return false
     }
     stack = [] // if you not reset value of this, next test case will keep previous testcase value @@
     hashMap = []
     stackAllItem(root)
     while(stack.length) {
         let candidate = stack.pop()
         if(hashMap[candidate]){
             return true
         }
         hashMap[(k-candidate)] = true
     }
     return false
 };