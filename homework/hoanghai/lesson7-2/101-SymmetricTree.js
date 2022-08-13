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
 * @return {boolean}
 */
// [1,2,2,3,4,4,3]
// [1,2,2,null,3,null,3]
// [1,2,2,3,null,-1,3]
// [1,2,2,3,null,-1,3]
function checkSymmetricArr(arr) {
    let start = 0
    let end = arr.length -1
    while(start < end) {
        if (arr[start] != arr[end]) {
            return false
        }
        start += 1
        end -= 1
    }
    return true
}
var isSymmetric = function(root) {
    // idea:, push lan luot vao queue va xet tung tang.
    // tang 1, chi 1 minh no. tang 2, 2 phan tu
    // tang 3, so phan tu la chan, va no doi xung trong thanh phan con
    // ... cu nhu the
    let queue = [root]
    let answer = []
    while(queue.length) {
        previous = answer
        let child = []
        answer = []
        for (const node of queue) {
            if(node) {
                if(node.val != null) {
                    answer.push(node.val)
                }
                child.push(node.left)
                child.push(node.right)
            } else {
                answer.push('A')
            }
        }
        queue = child
        // console.log(previous)
        // must check previous la mang doi xung o day hay ko!
        if (!checkSymmetricArr(previous)) {
            return false
        }
    }
    return true
};