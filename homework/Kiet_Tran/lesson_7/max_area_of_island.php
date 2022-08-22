<?php

/**
 * https://leetcode.com/problems/max-area-of-island/
 */
class Solution {

    private $grid = [];
    private $visited = [];

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function maxAreaOfIsland(array $grid): int {
        $this->grid = $grid;

        $answer = 0;
        for ($r = 0; $r < count($this->grid); $r++) {
            for ($c = 0; $c < count($this->grid[0]); $c++) {
                $answer = max($answer, $this->area($r, $c));
            }
        }

        return $answer;
    }

    private function area(int $r, int $c): int {
        if ($r < 0 || $r >= count($this->grid) || $c < 0 || $c >= count($this->grid[0]) || $this->visited[$r][$c] || $this->grid[$r][$c] == 0) {
            return 0;
        }

        $this->visited[$r][$c] = true;
        return (1 + $this->area($r + 1, $c) + $this->area($r - 1, $c) + $this->area($r, $c - 1) + $this->area($r, $c + 1));
    }
}
