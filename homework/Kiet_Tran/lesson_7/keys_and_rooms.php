<?php

/**
 * https://leetcode.com/problems/keys-and-rooms/
 */
class Solution {

    /**
     * @param Integer[][] $rooms
     * @return Boolean
     */
    function canVisitAllRooms(array $rooms): bool {
        $visited = [];
        $visited[0] = true;
        $stack = [0];

        while (!empty($stack)) {
            $node = array_pop($stack);
            foreach ($room[$node] as $next) {
                if (!$visited[$next]) {
                    $visited[$next] = true;
                    array_push($stack, $next);
                }
            }
        }

        foreach ($visited as $visitedRoom) {
            if (!$visitedRoom) {
                return false;
            }
        }

        return true;
    }
}
