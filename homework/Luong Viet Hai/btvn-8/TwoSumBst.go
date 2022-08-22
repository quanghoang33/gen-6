package b8

func twoSumBSTs(root1 *TreeNode, root2 *TreeNode, target int) bool {
	return dfs(root1, root2, target)
}

func dfs(root1 *TreeNode, root2 *TreeNode, target int) bool {
	if root1 == nil {
		return false
	}
	if root2 == nil {
		return false
	}

	if root1.Val+root2.Val == target {
		return true
	}

	if root1.Val+root2.Val < target {
		return dfs(root1.Right, root2, target) || dfs(root1, root2.Right, target)
	} else {
		return dfs(root1.Left, root2, target) || dfs(root1, root2.Left, target)
	}
}
