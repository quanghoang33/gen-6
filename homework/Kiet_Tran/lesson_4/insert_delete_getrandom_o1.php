<?php

/**
 * https://leetcode.com/problems/insert-delete-getrandom-o1/
 */
class RandomizedSet {

    private $set;
    private $has;

    /**
     */
    function __construct() {
        $this->set = [];
        $this->hash = [];
    }
  
    /**
     * @param Integer $val
     * @return Boolean
     */
    function insert(int $val): bool {
        if (in_array($val, $this->set)) {
            return false;
        }

        array_push($this->set, $val);
        $this->hash[$val] = count($this->set) - 1;
        return true;
    }
  
    /**
     * @param Integer $val
     * @return Boolean
     */
    function remove(int $val): bool {
        if (!in_array($val, $this->set)) {
            return false;
        }

        $n = count($this->set);
        $targetKey = $this->hash[$val];
        $lastElement = $this->set[$n - 1];
        $this->set[$n - 1] = $val;
        $this->set[$targetKey] = $lastElement;
        array_pop($this->set);
        unset($this->hash[$val]);
        return true;
    }
  
    /**
     * @return Integer
     */
    function getRandom(): int {
        $randomKey = rand(0, count($this->set) - 1);
        return $this->set[$randomKey];
    }
}
