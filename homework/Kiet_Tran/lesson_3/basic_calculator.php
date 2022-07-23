<?php

/**
 * https://leetcode.com/problems/basic-calculator/
 */
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function calculate(string $s): int {
        $stack = [];
        $operation = 0;
        $result = 0;
        $sign = 1;

        $str = str_split($s);
        for ($i = 0; $i < strlen($s); $i++) {
            $char = $str[$i];
            if (is_numeric($char)) {
                $operation = ($operation * 10) + (int)$char;
            } elseif ($char === '+') {
                $result += $sign * $operation;
                $sign = 1;
                $operation = 0;
            } elseif ($char === '-') {
                $result += $sign * $operation;
                $sign = -1;
                $operation = 0;
            } elseif ($char === '(') {
                array_push($stack, $result);
                array_push($stack, $sign);
                $sign = 1;
                $result = 0;
            } elseif($char === ')') {
                $result += $sign * $operation;
                $result *= array_pop($stack);
                $result += array_pop($stack);
                $operation = 0;
            }
        }

        return $result + $sign * $operation;
    }
}
