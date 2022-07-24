<?php

/**
 * https://leetcode.com/problems/maximum-subarray/
 */
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function maxSubArray(array $nums): int {
        $currentSubArray = $nums[0];
        $maxSubArray = $nums[0];

        for ($i = 1; $i < count($nums); $i++) {
            $currentSubArray = max($nums[$i], $currentSubArray + $nums[$i]);
            $maxSubArray = max($maxSubArray, $currentSubArray);
        }

        return $maxSubArray;
    }
}
