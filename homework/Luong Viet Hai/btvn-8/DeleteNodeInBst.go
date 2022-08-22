package b8

func deleteNode(root *TreeNode, key int) *TreeNode {
	if root == nil {
		return nil
	}

	if root.Val < key {
		deleteNode(root.Right, key)

	}

	if root.Val > key {
		deleteNode(root.Left, key)
	}

	if root.Val == key {
		if root.Left == nil && root.Right == nil {
			root = nil
			return nil
		}
		if root.Left != nil {
			leafLeftNode := getMaxTree(root.Left)
			temp := leafLeftNode
			root = nil
			root = temp
			return root
		}

		if root.Right != nil {
			leafRightNode := getMinTree(root.Right)
			temp := leafRightNode
			root = nil
			root = temp
			return root
		}
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

func getMinTree(root *TreeNode) *TreeNode {
	if root.Left != nil {
		return getMinTree(root.Left)
	} else {
		return root
	}
}
