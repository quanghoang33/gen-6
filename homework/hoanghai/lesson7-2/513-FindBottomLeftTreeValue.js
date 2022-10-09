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
 * @return {number}
 */
 var findBottomLeftValue = function(root) {
    let queue = [root]
    let answer = []
    let previous = []
    while(queue.length) {
        // xet lan luot tung tang, boi vi answer la ket qua ben trai cua tang duoi cung,ma ben trai luon duoc push vao truoc nen previous 0 la ket qua can tim
        let child = []
        previous = answer
        answer = []
        for (const node of queue) {
            if (node) {
                answer.push(node.val)
                child.push(node.left) // push gia tri 2 node con vao queue
                child.push(node.right)
            }
        }
        queue = child
    }
    return previous[0]
};