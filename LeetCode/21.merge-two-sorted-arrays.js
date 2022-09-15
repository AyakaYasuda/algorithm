/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.


Example 1:

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:

Input: list1 = [], list2 = []
Output: []

Example 3:

Input: list1 = [], list2 = [0]
Output: [0]

*/

/*
list1.value === null
-> return list2

list2.value === null
-> return list1

list1.value < list2.value
-> list1.next = mergeTwoLists(list1.next, list2)
   return list1

list1.value >= list2.value
-> list2.next = mergeTwoLists(list1, list2.next)
   return list2

*/

const mergeTwoLists = (list1, list2) => {
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  let head;
  if (list1.val < list2.val) {
    head = list1;
    list1 = list1.next;
  } else {
    head = list2;
    list2 = list2.next;
  }

  head.next = mergeTwoLists(list1, list2);

  return head;
};

// -1                           list1 = [1,2,4], list2 = [1,3,4]
// -1 -> 1                      list1 = [2,4], list2 = [1,3,4]
// -1 -> 1 -> 1                 list1 = [2,4], list2 = [3,4]
// -1 -> 1 -> 1 -> 2            list1 = [4], list2 = [3,4]
// -1 -> 1 -> 1 -> 2 -> 3       list1 = [4], list2 = [4]
// -1 -> 1 -> 1 -> 2 -> 3 -> 4  list1 = [], list2 = [4]
// -1 -> 1 -> 1 -> 2 -> 3 -> 4  -> 4

const mergeTwoSortIteratively = (list1, list2) => {
  const prehead = new ListNode(-1);

  let prev = prehead;
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      prev.next = list1;
      list1 = list1.next;
    } else {
      prev.next = list2;
      list2 = list2.next;
    }
    prev = prev.next;
  }

  prev.next = list1 === null ? list2 : list1;

  return prehead.next;
};
