<?php

/**
 * https://leetcode.com/problems/k-diff-pairs-in-an-array/
 */
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function findPairs(array $nums, int $k): int {
        $result = 0;

        $hash = [];
        foreach ($nums as $num) {
            if (array_key_exists($num, $hash)) {
                $hash[$num] += 1;
            } else {
                $hash[$num] = 1;
            }
        }

        foreach ($hash as $x => $val) {
            if ($k > 0 && array_key_exists($x + $k, $hash)) {
                $result++;
            } elseif ($k == 0 && $val > 1) {
                $result++;
            }
        }

        return $result;
    }
}
