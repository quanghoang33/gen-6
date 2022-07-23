<?php

/**
 * https://leetcode.com/problems/sliding-window-maximum/
 */
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer[]
     */
    function maxSlidingWindow(array $nums, int $k): array {
        $n = count($nums);
        if (!($n * $k)) {
            return [];
        }

        $result = [];
        for ($i = 0; $i < $n - $k + 1; $i++) {
            $max = PHP_INT_MIN;
            for ($j = $i; $j < $i + $k; $j++) {
                $max = max($max, $nums[$j]);
            }
            $result[$i] = $max;
        }

        return $result;
    }
}
