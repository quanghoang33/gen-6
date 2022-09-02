class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * Solution 1: Brute force
 * Time complexity: O(n * log(n)), n is total number of nodes
 * Extra space: O(n)
 */
function mergeKLists_1(lists: Array<ListNode | null>): ListNode | null {
  const arrayLists: number[] = [];

  for (let list of lists) {
    while (list) {
      arrayLists.push(list.val);
      list = list.next;
    }
  }

  arrayLists.sort((a, b) => a - b);
  const head = new ListNode();
  let dummyHead = head;

  for (const numb of arrayLists) {
    dummyHead.next = new ListNode(numb);
    dummyHead = dummyHead.next;
  }

  return head.next;
}

/**
 * Solution 2: merge sort
 * Time complexity: O(k * n)
 *      n is total number of nodes
 *      k is the number of merge sort linked list
 * Extra space: O(1)
 */
function mergeKLists_2(lists: Array<ListNode | null>): ListNode | null {
  const size = lists.length;
  let interval = 1;

  while (interval < size) {
    for (let i = 0; i < size - interval; i += interval * 2) {
      lists[i] = merge2Lists_2(lists[i], lists[i + interval]);
    }
    interval *= 2;
  }

  return size > 0 ? lists[0] : null;
}

function merge2Lists_2(list1: ListNode | null, list2: ListNode | null) {
  const head = new ListNode();
  let dummyHead = head;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      dummyHead.next = list2;
      list2 = list2.next;
    } else {
      dummyHead.next = list1;
      list1 = list1.next;
    }
    dummyHead = dummyHead.next;
  }

  if (list1) {
    dummyHead.next = list1;
  } else {
    dummyHead.next = list2;
  }

  return head.next;
}
