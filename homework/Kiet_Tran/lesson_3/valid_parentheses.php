<?php

/**
 * https://leetcode.com/problems/valid-parentheses
 */
class Solution {

    /**
     * @param String $s
     * @return Boolean
     */
    function isValid(string $s): bool {
        $stack = [];
        $mapping = [
            ')' => '(',
            '}' => '{',
            ']' => '['
        ];

        foreach (str_split($s) as $char) {
            if (array_key_exists($char, $mapping)) {
                $element = empty($stack) ? '#' : array_pop($stack);
                if ($element != $mapping[$char]) {
                    return false;
                }
            } else {
                array_push($stack, $char);
            }
        }

        return empty($stack);
    }
}
