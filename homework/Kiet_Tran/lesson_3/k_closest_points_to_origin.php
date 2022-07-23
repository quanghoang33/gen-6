<?php

/**
 * https://leetcode.com/problems/k-closest-points-to-origin/
 */
class Solution {

    /**
     * @param Integer[][] $points
     * @param Integer $k
     * @return Integer[][]
     */
    function kClosest(array $points, int $k): array {
        return $this->quickSelect($points, $k);
    }
    
    private function quickSelect(array $points, int $k): array {
        $left = 0;
        $right = count($points) - 1;
        $pivotIndex = count($points);
        while ($pivotIndex != $k) {
            $pivotIndex = $this->dutchFlagPartition($points, $left, $right);
            if ($pivotIndex < $k) {
                $left = $pivotIndex;
            } else {
                $right = $pivotIndex - 1;
            }
        }
        
        return array_splice($points, 0, $k);
    }
    
    private function dutchFlagPartition(array &$points, int $left, int $right): int {
        $pivot = $this->choosePivot($points, $left, $right);
        $pivotDistance = $this->squareDistance($pivot);
        while ($left < $right) {
            if ($this->squareDistance($points[$left]) >= $pivotDistance) {
                $tmp = $points[$left];
                $points[$left] = $points[$right];
                $points[$right] = $tmp;
                $right--;
            } else {
                $left++;
            }
        }
        
        if ($this->squareDistance($points[$left]) < $pivotDistance) {
            $left++;
        }
        return $left;
    }
    
    private function choosePivot(array $points, int $left, int $right): array {
        return $points[$left + ($right - $left) / 2];
    }
    
    private function squareDistance(array $point): int {
        return pow($point[0], 2) + pow($point[1], 2);
    }
}
