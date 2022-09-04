class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const nodeH = new TreeNode(2, null, null);
const nodeD = new TreeNode(3, nodeH, null);

const nodeE = new TreeNode(6, null, null);
const nodeB = new TreeNode(2, nodeD, nodeE);

const nodeI = new TreeNode(5, null, null);
const nodeJ = new TreeNode(6, null, null);
const nodeG = new TreeNode(1, nodeI, nodeJ);

const nodeF = new TreeNode(3, null, null);
const nodeC = new TreeNode(3, nodeF, nodeG);

const nodeA = new TreeNode(1, nodeB, nodeC);


function solutionUtil(root, mSet) {
  if((root === null) || mSet.has(root.val)){
    return mSet.size;
  }

  mSet.add(root.val);
  const left = solutionUtil(root.left, mSet);
  const right = solutionUtil(root.right, mSet);
  mSet.delete(root.val);

  return Math.max(left, right);
}

function solution(root) {
  const mSet = new Set();
  return solutionUtil(root, mSet);
}

console.log(solution(nodeA));