package b8

func deleteNode(root *TreeNode, key int) *TreeNode {
	if root == nil {
		return nil
	}

	if root.Val < key {
		root.Right = deleteNode(root.Right, key)

	}

	if root.Val > key {
		root.Left = deleteNode(root.Left, key)
	}

	if root.Val == key {
		if root.Left == nil {
			return root.Right
		} else if root.Right == nil {
			return root.Left
		}

		newRoot := getMaxTree(root.Left)
		newRoot.Right = root.Right
		root = root.Left
	}
	return root
}

func getMaxTree(root *TreeNode) *TreeNode {
	if root.Right != nil {
		return getMaxTree(root.Right)
	} else {
		return root
	}
}
