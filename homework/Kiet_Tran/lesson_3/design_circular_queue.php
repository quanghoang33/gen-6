<?php

/**
 * https://leetcode.com/problems/design-circular-queue/
 */
class MyCircularQueue {
    
    private $queue;
    private $headIndex;
    private $count;
    private $capacity;
    
    /**
     * @param Integer $k
     */
    function __construct(int $k) {
        $this->queue = [];
        $this->capacity = $k;
        $this->headIndex = 0;
        $this->count = 0;
    }
  
    /**
     * @param Integer $value
     * @return Boolean
     */
    function enQueue(int $value): bool {
        if ($this->capacity == $this->count) {
            return false;
        }

        $this->queue[($this->headIndex + $this->count) % $this->capacity] = $value;
        $this->count++;
        return true;
    }
  
    /**
     * @return Boolean
     */
    function deQueue(): bool {
        if (!$this->count) {
            return false;
        }

        $this->headIndex = ($this->headIndex + 1) % $this->capacity;
        $this->count--;
        return true;
    }
  
    /**
     * @return Integer
     */
    function Front(): int {
        if (!$this->count) {
            return -1;
        }

        return $this->queue[$this->headIndex];
    }
  
    /**
     * @return Integer
     */
    function Rear(): int {
        if (!$this->count) {
            return -1;
        }

        return $this->queue[($this->headIndex + $this->count - 1) % $this->capacity];
    }
  
    /**
     * @return Boolean
     */
    function isEmpty(): bool {
        return ($this->count == 0);
    }
  
    /**
     * @return Boolean
     */
    function isFull(): bool {
        return ($this->count == $this->capacity);
    }
}
