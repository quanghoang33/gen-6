<?php

/**
 * https://leetcode.com/problems/sliding-window-maximum/
 */
class Solution {

    private $deque = [];
    private $nums = [];

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
        if ($k == 1) {
            return $nums;
        }

        $this->nums = $nums;
        $maxIndex = 0;
        for ($i = 0; $i < $k; $i++) {
            $this->cleanDeque($i, $k);
            array_push($this->deque, $i);
            if ($nums[$i] > $nums[$maxIndex]) {
                $maxIndex = 1;
            }
        }
        $result = [$nums[$maxIndex]];

        for ($i = $k; $i < $n; $i++) {
            $this->cleanDeque($i, $k);
            array_push($this->deque, $i);
            array_push($result, $nums[$this->deque[0]]);
        }

        return $result;
    }

    private function cleanDeque(int $i, int $k): void {
        if ($this->deque && $this->deque[0] == $i - $k) {
            array_shift($this->deque);
        }

        while ($this->deque && $this->nums[$i] > $this->nums[$this->deque[count($this->deque) - 1]]) {
            array_pop($this->deque);
        }
    }
}
