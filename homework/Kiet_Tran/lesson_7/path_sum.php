<?php

/**
 * https://leetcode.com/problems/path-sum/
 */
class Solution {

    /**
     * @param TreeNode $root
     * @param Integer $targetSum
     * @return Boolean
     */
    function hasPathSum(?TreeNode $root, int $targetSum): bool {
        if (is_null($root)) {
            return false;
        }
        
        $targetSum -= $root->val;
        if (is_null($root->left) && is_null($root->right)) {
            return ($targetSum == 0);
        }
        
        return $this->hasPathSum($root->left, $targetSum) || $this->hasPathSum($root->right, $targetSum);
    }
}
