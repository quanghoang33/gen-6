<?php

/**
 * https://leetcode.com/problems/path-sum-iii/
 */
class Solution {

    private $count = 0;
    private $targetSum;
    private $hash = [];

    /**
     * @param TreeNode $root
     * @param Integer $targetSum
     * @return Integer
     */
    function pathSum(?TreeNode $root, int $targetSum): int {
        $this->targetSum = $targetSum;
        $this->preOrder($root, 0);
        return $this->count;
    }

    private function preOrder(?TreeNode $node, int $currentSum): void {
        if (is_null($node)) {
            return;
        }

        $currentSum += $node->val;

        if ($currentSum == $this->targetSum) {
            $this->count++;
        }

        $this->count += $this->hash[$currentSum - $this->targetSum];
        $this->hash[$currentSum] += 1;

        $this->preOrder($node->left, $currentSum);
        $this->preOrder($node->right, $currentSum);

        $this->hash[$currentSum] -= 1;
    }
}
