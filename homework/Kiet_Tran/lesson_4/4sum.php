<?php

/**
 * https://leetcode.com/problems/4sum/
 */
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[][]
     */
    function fourSum(array $nums, int $target): array {
        sort($nums);
        return $this->kSum($nums, $target, 0, 4);
    }

    private function kSum(array $nums, int $target, int $start, int $k): array {
        $n = count($nums);
        $result = [];

        if (!$nums) {
            return $result;
        }

        $average = $target / 4;

        if ($average < $nums[$start] || $average > $nums[$n - 1]) {
            return $result;
        }

        if ($k == 2) {
            return $this->twoSum($nums, $target, $start);
        }

        for ($i = $start; $i < $n; $i++) {
            if ($i == $start || $nums[$i - 1] != $nums[$i]) {
                foreach ($this->kSum($nums, $target - $nums[$i], $i + 1, $k - 1) as $subset) {
                    array_push($result, $subset + [$nums[$i]]);
                }
            }
        }

        return $result;
    }

    private function twoSum(array $nums, int $target, int $start): array {
        $n = count($nums);
        $result = [];
        $subset = [];

        for ($i = $start; $i < count($nums); $i++) {
            if (!$nums || $result[$n - 1][1] != $nums[$i]) {
                if (in_array($target - $nums[$i], $subset)) {
                    array_push($result, $target - $nums[$i], $nums[$i]);
                }
            }
            array_push($subset, $nums[$i]);
        }

        return $result;
    }
}
