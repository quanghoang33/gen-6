<?php

/**
 * https://leetcode.com/problems/insert-delete-getrandom-o1/
 */
class RandomizedSet {

    private $set;

    /**
     */
    function __construct() {
        $this->set = [];
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

        $key = array_search($val, $this->set);
        unset($this->set[$key]);
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
