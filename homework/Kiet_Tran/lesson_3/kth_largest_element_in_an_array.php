<?php

/**
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 */
class Solution {

    private $nums = [];
    
    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function findKthLargest(array $nums, int $k): int {
        $this->nums = $nums;
        $size = count($nums);
        return $this->quickSelect(0, $size - 1, $size - $k);
    }
    
    private function quickSelect(int $left, int $right, int $k): int {
        if ($left == $right) {
            return $this->nums[$left];
        }
        $pivotIndex = rand($left, $right);
        $pivotIndex = $this->dutchFlagPartition($left, $right, $pivotIndex);
        if ($pivotIndex == $k) {
            return $this->nums[$k];
        } else if ($pivotIndex > $k) {
            return $this->quickSelect($left, $pivotIndex - 1, $k);
        }
        return $this->quickSelect($pivotIndex + 1, $right, $k);
    }
    
    private function dutchFlagPartition(int $left, int $right, int $pivotIndex): int {
        $pivot = $this->nums[$pivotIndex];
        $this->swap($pivotIndex, $right);
        $boundary = $left;
        for ($i = $left; $i <= $right; $i++) {
            if ($this->nums[$i] < $pivot) {
                $this->swap($i, $boundary);
                $boundary++;
            }
        }
        $this->swap($right, $boundary);
        return $boundary;
    }
    
    private function swap(int $a, int $b): void {
		$tmp = $this->nums[$a];
		$this->nums[$a] = $this->nums[$b];
		$this->nums[$b] = $tmp;
	}
}
