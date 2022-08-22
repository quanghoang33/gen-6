<?php

/**
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/
 */
class Solution {

    /**
     * @param String $s
     * @param Integer $k
     * @return String
     */
    function removeDuplicates(string $s, int $k): string {
        $result = str_split($s);
        $stack = [];

        for ($i = 0; $i < strlen($s); ++$i) {
            if ($i == 0 || $result[$i] != $result[$i - 1]) {
                array_push($stack, 1);
            } else {
                $increased = array_pop($stack) + 1;
                if ($increased == $k) {
                    array_splice($stack, $i - $k + 1, $k);
                    $i = $i - $k;
                } else {
                    array_push($stack, $increased);
                }
            }
        }

        return implode('', $result);
    }
}
