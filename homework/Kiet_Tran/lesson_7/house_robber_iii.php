<?php

/**
 * https://leetcode.com/problems/house-robber-iii/
 */
class Solution {

    /**
     * @param TreeNode $root
     * @return Integer
     */
    function rob(?TreeNode $root): int {
        $answer = $this->checker($root);
        return max($answer[0], $answer[1]);
    }

    private function checker(?TreeNode $node): array {
        if (is_null($node)) {
            return [0, 0];
        }

        $left = $this->checker($node->left);
        $right = $this->checker($node->right);

        $rob = $node->val + $left[1] + $right[1];
        $notRob = max($left[0], $left[1]) + max($right[0], $right[1]);

        return [$rob, $notRob];
    }
}
