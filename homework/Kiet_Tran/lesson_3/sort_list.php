<?php

/**
 * https://leetcode.com/problems/sort-list/
 */
class Solution {

    /**
     * @param ListNode|null $head
     * @return ListNode|null
     */
    function sortList(?ListNode $head): ?ListNode {
        if (is_null($head) || is_null($head->next)) {
            return $head;
        }

        $mid = $this->getMid($head);
        $left = $this->sortList($head);
        $right = $this->sortList($mid);
        return $this->merge($left, $right);
    }

    private function getMid(ListNode $head): ListNode {
        $previousMid = null;
        while (!is_null($head) && !is_null($head->next)) {
            $previousMid = is_null($previousMid) ? $head : $previousMid->next;
            $head = ($head->next)->next;
        }
        $mid = $previousMid->next;
        $previousMid->next = null;
        return $mid;
    }

    private function merge(ListNode $list1, ListNode $list2): ListNode {
        $tmpHead = new ListNode();
        $tail = $tmpHead;
        while (!is_null($list1) && !is_null($list2)) {
            if ($list1->val < $list2->val) {
                $tail->next = $list1;
                $list1 = $list1->next;
                $tail = $tail->next;
            } else {
                $tail->next = $list2;
                $list2 = $list2->next;
                $tail = $tail->next;
            }
        }
        $tail->next = !is_null($list1) ? $list1 : $list2;
        return $tmpHead->next;
    }
}
