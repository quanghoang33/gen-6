<?php

/**
 * https://leetcode.com/problems/path-sum-ii
 */
class Solution {

    /**
     * @param TreeNode $root
     * @param Integer $targetSum
     * @return Integer[][]
     */
    function pathSum(?TreeNode $root, int $targetSum): array {
        $pathsList = [];
        $this->recurseTree($root, $targetSum, [], $pathsList);
        return $pathsList;
    }

    private function recurseTree(?TreeNode $node, int $remainingSum, array $pathNodes, array &$pathsList): void {
        if (is_null($node)) {
            return;
        }

        array_push($pathNodes, $node->val);

        if ($remainingSum == $node->val && is_null($node->left) && is_null($node->right)) {
            array_push($pathsList, $pathNodes);
        } else {
            $this->recurseTree($node->left, $remainingSum - $node->val, $pathNodes, $pathsList);
            $this->recurseTree($node->right, $remainingSum - $node->val, $pathNodes, $pathsList);
        }

        array_pop($pathNodes);
    }
}
