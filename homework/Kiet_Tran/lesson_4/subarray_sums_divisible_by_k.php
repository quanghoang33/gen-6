<?php

/**
 * https://leetcode.com/problems/subarray-sums-divisible-by-k/
 */
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function subarraysDivByK(array $nums, int $k): int {
        $mod = [];

        for ($i = 0; $i < $k; $i++) {
            array_push($mod, 0);
        }

        $cumSum = 0;
        $n = count($nums);
        for ($i = 0; $i < $n; $i++) {
            $cumSum += $nums[$i];
            $mod[(($cumSum % $k) + $k) % $k] += 1;
        }

        $result = 0;

        for ($i = 0; $i < $k; $i++) {
            if ($mod[$i] > 1) {
                $result += ($mod[$i] * ($mod[$i] - 1)) / 2;
            }
        }

        $result += $mod[0];

        return $result;
    }
}
